<template>
  <div
    class="flex items-center p-4 bg-white shadow-md rounded-lg dark:border-slate-900 dark:bg-slate-800"
  >
    <div class="relative flex flex-col items-center justify-evenly mr-3">
      <span class="text-sm text-gray-500"> 距离 </span>
      <span class="font-bold text-lg">{{ eventData.name }}</span>
      <span class="text-3xl font-bold text-purple-500 dark:text-purple-600">
        {{ getDaysUntil(eventData.date) }}
      </span>
      <span class="text-xs text-gray-400">{{ eventData.date }}</span>
      <div class="absolute right-[-0.8rem] w-[2px] h-[80%] bg-gray-300"></div>
    </div>

    <!-- 右侧时间进度条，整个区域监听鼠标悬浮 -->
    <div
      v-if="remainData"
      class="flex-1 w-full ml-3"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div
        v-for="(item, tag, index) in remainData"
        :key="index"
        class="flex items-center h-6 my-1"
      >
        <div class="text-sm mr-3 whitespace-nowrap text-gray-500">
          {{ item.name }}
        </div>
        <div
          class="relative flex items-center justify-between w-full h-full bg-gray-200 rounded-lg overflow-hidden"
        >
          <div
            class="h-full rounded-lg bg-violet-500 dark:bg-violet-700 transition-all duration-300"
            :style="{
              width: item.percentage + '%',
              opacity: item.percentage / 100,
            }"
          />

          <!-- 默认显示百分比 -->
          <span
            v-if="!isHovered"
            :class="[
              'absolute text-xs mx-1 transition-opacity',
              { 'text-white': item.percentage >= 46 },
            ]"
          >
            {{ item.percentage }}%
          </span>

          <!-- 鼠标悬浮时显示剩余时间，带过渡效果 -->
          <span
            v-if="isHovered"
            class="absolute text-xs mx-1 transition-all duration-500 opacity-0 translate-x-2"
            :class="{
              'opacity-100 translate-x-0': isHovered,
            }"
          >
            <span class="text-gray-600 dark:text-white">还剩</span>
            {{ item.remaining }}
            <span class="text-gray-600 dark:text-white">{{
              tag === "day" ? "小时" : "天"
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getTimeRemaining, getDaysUntil } from "../../utils/timeTools";

// 当前年份
const currentYear = new Date().getFullYear();

// 倒计时事件信息
const eventData = ref({
  name: "我的生日",
  date: `${currentYear}-10-21`,
});


// 倒计时数据
const remainData = ref(null);
const remainInterval = ref(null);
const isHovered = ref(false); // 追踪整个进度条区域的悬浮状态

// 获取倒计时数据
const getRemainData = () => {
  remainData.value = getTimeRemaining(eventData.value.date);
  remainInterval.value = setInterval(() => {
    remainData.value = getTimeRemaining(eventData.value.date);
  }, 1000);
};

onMounted(() => {
  getRemainData();
});

onBeforeUnmount(() => {
  clearInterval(remainInterval.value);
});
</script>
