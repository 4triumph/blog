<template>
  <div
    class="flex-1 bg-white dark:bg-gray-50 rounded-xl shadow-xl p-4 w-full h-full"
  >
    <!-- 返回按钮（仅中国地图下钻时显示） -->
    <button
      type="primary"
      size="small"
      @click="goBack"
      v-if="historyStack.length && isChina"
      class="text-sm rounded-md w-[10%] border border-sky-500 text-sky-600 bg-white hover:text-white hover:bg-gradient-to-r hover:from-violet-400 hover:to-sky-400 dark:hover:from-sky-600 dark:hover:to-violet-700 transition duration-300 shadow-sm shadow-blue-500/50 hover:shadow-md py-2"
    >
      返回上级
    </button>
    <!-- 地图显示区域 -->
    <div ref="mapChartRef" class="w-full h-full min-h-[900px]" />
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, onBeforeUnmount } from "vue";
import { ElMessage } from "element-plus";
import chinaMaps from "../../assets/map/china/index"; // 确保路径正确
import { nextTick } from "vue";

// Props: 传入地图名称（支持中国地图下钻及其他国家地图）
const props = defineProps({
  mapName: {
    type: String,
    default: "china", // "china", "japan", "world" 等
  },
});

// 引用
const mapChartRef = ref();
let chartInstance = null;

// 判断是否为中国地图（用于控制是否下钻）
const isChina = ref(props.mapName === "china");

// 当前地图状态
const currentMapName = ref(isChina.value ? "中国" : props.mapName);
const currentAdcode = ref(isChina.value ? 100000 : null);
const regionData = ref([]);
const historyStack = ref([]);

// 定义去过的地方
const visitedRegions = {
  china: [
    "陕西省",
    "咸阳市",
    "福建省",
    "厦门市",
    "宁德市",
    "福鼎市",
    "浙江省",
    "杭州市",
    "金华市",
    "义乌市",
    "江苏省",
    "南京市",
    "苏州市",
    "上海市",
    "安徽省",
    "合肥市",
    "湖北省",
    "武汉市",
    "江西省",
    "南昌市",
    "景德镇市",
    "广东省",
    "深圳市",
    "广州市",
    "惠州市",
    "东莞市",
    "汕头市",
    "清远市",
    "韶关市",
    "珠海市",
    "佛山市",
    "香港特别行政区",
    "黑龙江省",
    "哈尔滨市",
    "辽宁省",
    "吉林省",
    "青海省",
    "甘肃省",
    "酒泉市",
    "张掖市",
    "武威市",
    "兰州市",
    "四川省",
    "八中市",
    "重庆市",
    "云南省",
    "昆明市",
    "大理白族自治州",
    "丽江市",
    "广西壮族自治区",
    "桂林市",
    "阳朔县",
  ], 
  japan: ["Tokyo", "Osaka"],
  world: ["中国", "日本"]
};

// 统一的颜色
const visitedColor = "#6366F1";

// 加载地图数据
// 加载地图数据
const loadMap = async (adcodeOrName, mapLabel) => {
  try {
    let mapJson;

    if (isChina.value) {
      const mapData = chinaMaps[adcodeOrName];
      if (!mapData) {
        throw new Error("未找到对应的地图数据");
      }
      mapJson = mapData.json;
    } else {
      mapJson = (await import(`../../assets/map/${adcodeOrName}.json`)).default;
    }

    echarts.registerMap(mapLabel, mapJson);

    // 无论是否是中国地图，都获取 features -> properties
    regionData.value = mapJson.features.map((item) => item.properties);

    renderMap(mapLabel);
  } catch (error) {
    console.error("地图加载失败：", error);
    ElMessage.error("地图加载失败！");
  }
};


// 渲染地图
const renderMap = (mapLabel) => {
  // 计算中心点坐标（默认不设置）
  let center = null;
  let zoom = null;

  // 如果是中国地图，并且当前有下钻，则尝试设置中心点
  if (isChina.value && currentAdcode.value !== "100000") {
    const region = regionData.value.find(
      (r) => r.adcode === currentAdcode.value
    );
    if (region?.center) {
      center = region.center;
      zoom = 1.2; // 你可以根据需要调整缩放等级
    }
  }
  // 动态设置去过地方的颜色
  const mapData = regionData.value.map((region) => {
    const regionName = region.name;
    let regionColor = "#cde8ff"; // 默认颜色

    // 如果该区域在visitedRegions中，设置为已去过的颜色
    if (
      props.mapName === "china" &&
      visitedRegions.china.includes(regionName)
    ) {
      regionColor = visitedColor;
    } else if (
      props.mapName === "japan" &&
      visitedRegions.japan.includes(regionName)
    ) {
      regionColor = visitedColor;
    } else if (
      props.mapName === "world" &&
      visitedRegions.world.includes(regionName)
    ) {
      regionColor = visitedColor;
    }

    return {
      name: regionName,
      value: region.value || 0,
      itemStyle: {
        areaColor: regionColor,
        borderColor: "#999",
      },
    };
  });

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params) => params.name,
    },
    series: [
      {
        type: "map",
        map: mapLabel,
        roam: true,
        center: center,
        zoom: zoom,
        label: { show: false },
        itemStyle: {
          areaColor: "#cde8ff",
          borderColor: "#999",
        },
        emphasis: {
          itemStyle: {
            areaColor: "#ffd591",
          },
        },
        data: mapData, // 填充自定义颜色数据
      },
    ],
  };

  chartInstance?.setOption(option);
  chartInstance?.off("click");

  if (isChina.value) {
    chartInstance?.on("click", (params) => {
      const region = regionData.value.find((r) => r.name === params.name);
      if (region?.adcode && region?.childrenNum) {
        historyStack.value.push({
          adcode: currentAdcode.value,
          name: currentMapName.value,
        });
        currentAdcode.value = String(region.adcode);
        currentMapName.value = region.name;
        loadMap(region.adcode, region.name);
      }
    });
  }
};

// 返回上一级（仅中国地图可用）
const goBack = () => {
  const last = historyStack.value.pop();
  if (last) {
    currentAdcode.value = last.adcode;
    currentMapName.value = last.name;
    loadMap(last.adcode, last.name);
  }
};

// 初始化地图
onMounted(async () => {
  await nextTick();
  chartInstance = echarts.init(mapChartRef.value);
  if (isChina.value) {
    loadMap(currentAdcode.value, currentMapName.value);
  } else {
    loadMap(props.mapName, props.mapName);
  }
  // 监听窗口大小变化，动态调整地图大小
  window.addEventListener("resize", () => {
    chartInstance?.resize();
  });
});

// 清除监听器
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

watch(
  () => props.mapName,
  (newVal) => {
    isChina.value = newVal === "china";
    if (isChina.value) {
      currentAdcode.value = "100000";
      currentMapName.value = "中国";
      historyStack.value = [];
      loadMap("100000", "中国");
    } else {
      currentAdcode.value = null;
      currentMapName.value = newVal;
      historyStack.value = [];
      loadMap(newVal, newVal);
    }
  }
);
</script>

