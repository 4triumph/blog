<template>
  <div
    ref="chartRef"
    class="flex-1 bg-white dark:bg-gray-50 rounded-xl shadow-xl p-4 w-full h-full"
  ></div>
</template>

<script setup>
import * as echarts from "echarts/core";
import { onMounted, ref, watch } from "vue";
import {
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
  MapChart,
  CanvasRenderer,
]);

const props = defineProps({
  country: String,
});

const chartRef = ref(null);
let chartInstance = null;

const loadMap = async () => {
  const mapData = await import(`../../assets/map/${props.country}.json`);
  echarts.registerMap(props.country, mapData.default);

  const option = {
    tooltip: {
      trigger: "item",
    },
    geo: {
      map: props.country,
      roam: true,
      label: {
        show: true,
        color: "#000",
      },
      itemStyle: {
        areaColor: "#cce5ff",
        borderColor: "#000",
      },
      emphasis: {
        label: { show: true },
        itemStyle: {
          areaColor: "#ffcccb",
        },
      },
    },
  };

  chartInstance?.setOption(option);
};

onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  loadMap();
});

watch(
  () => props.country,
  () => {
    loadMap();
  }
);
</script>

