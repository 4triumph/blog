<template>
  <div class="mt-2 px-6 pb-24 md:px-12 md:pb-32 lg:px-16">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center">
      <!-- 头像与徽章 -->
      <div class="relative flex justify-center items-center mx-auto w-full">
        <!-- 头像 -->
        <div class="relative h-52 py-2">
          <div
            class="relative h-48 w-48 rounded-full shadow-[0px_0px_64px#d8b4fe] dark:shadow-[0px_0px_64px#8b5cf6]"
          >
            <img
              class="mx-auto block h-48 w-48 rounded-full"
              src="./img/avatar.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <!-- Right-tags -->
        <p
          style="top: 32%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[69%] sm:block md:left-[66%] lg:left-[63%] xl:left-[60%]"
        >
          网抑云梦想家 🎵
        </p>
        <p
          style="top: 50%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[69%] sm:block md:left-[66%] lg:left-[63%] xl:left-[60%]"
        >
          二进制吟游诗人 🙌
        </p>
        <!-- Left-tags -->
        <p
          style="top: 32%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[8%] sm:block md:left-[13%] lg:left-[21%] xl:left-[27%]"
        >
          🌙 讨厌黑眼圈
        </p>
        <p
          style="top: 50%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[8%] sm:block md:left-[13%] lg:left-[21%] xl:left-[27%]"
        >
          🎇 oc妙想机
        </p>
      </div>
      <!-- 概述与箴言 -->
      <div class="mt-4 flex w-full flex-col">
        <div class="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
          <!-- 概述 -->
          <div
            class="flex w-full flex-col justify-center rounded-xl shadow-md border bg-gradient-to-r from-violet-400 to-sky-400 px-8 py-4 text-white dark:border-slate-900 dark:from-violet-700 dark:to-sky-600 md:w-[59%]"
          >
            <p class="text-lg text-slate-50">你好，很高兴认识你 👋</p>
            <h1
              class="text-2xl font-bold lg:break-normal lg:break-words xl:text-3xl"
            >
              A insomniacal dreamer, a painter.
            </h1>
            <p class="text-slate-100">前端开发 / oc 🔥</p>
          </div>
          <!-- 倒计时 -->
          <div class="w-full md:w-[39%]">
            <Countdown />
          </div>
        </div>
      </div>
      <!-- 简介与技术栈 -->
      <div
        class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0"
      >
        <!-- 简介 -->
        <div
          class="bg-stripe w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[35%]"
        >
          <p class="text-[12px]">简介</p>
          <div class="mt-2">
            <h1 class="text-xl">主修计算机科学与技术</h1>
            <h1 class="text-xl">
              辅修<span class="text-pink-500">失眠幻想学</span>
            </h1>
            <h1 class="text-xl md:text-base lg:text-xl">
              梦想收到霍格沃茨录取通知书
            </h1>
            <p></p>
          </div>
        </div>
        <!-- 工作经历 -->
        <div
          class="bg-stripe w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[50%]"
        >
          <p class="text-[12px]">当前人生进度条</p>
          <h1 class="mt-2 text-4xl font-bold">追风赶月</h1>
          <div class="mt-4 md:text-base lg:text-xl">
            <p class="py-1">😭 毕业设计ing</p>
          </div>
        </div>
      </div>
      <!-- 技术 -->
      <div
        class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0"
      >
        <!-- 技术栈 -->
        <div
          class="w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[100%]"
        >
          <p class="text-[12px]">技术栈</p>
          <!-- TODO:封装ICON组件,抽离背景颜色与svg地址 -->
          <IconBox />
        </div>
      </div>
      <!-- 图片与经历 -->
      <div
        class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0"
      >
        <!-- 图片 -->
        <div
          class="honer-bg h-52 w-full rounded-xl bg-cover bg-center bg-no-repeat sm:h-auto md:w-[45%]"
        ></div>
      </div>
      <!-- 音乐/游戏 -->
      <div
        class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0"
      >
        <!-- 音乐 -->
        <a href="https://music.163.com/"
              target="_blank"
          class="relative h-52 min-h-[13rem] w-full overflow-hidden rounded-xl sm:h-auto md:h-auto md:w-[39%]"
        >
          <div
            class="music-bg absolute h-full w-full bg-cover bg-center bg-no-repeat"
          ></div>
          <div class="relative z-10 p-4">
            <p class="text-[12px] text-slate-200">音乐喜好</p>
            <h1 class="mt-1.5 text-4xl font-bold text-white">ACG</h1>
            <h1 class="mt-1.5 text-4xl font-bold text-white">Kpop</h1>
            <h1 class="mt-1.5 text-4xl font-bold text-white">Jpop</h1>
            <p class="text-right text-sm text-slate-100">《裸の勇者》</p>
          </div>
        </a>
        <!-- 游戏 -->
        <a
          href="https://splatoon3.ink/"
          target="_blank"
          class="relative block h-52 w-full overflow-hidden rounded-xl md:h-auto md:min-h-[13rem] md:w-[59%]"
        >
          <div
            class="game-bg absolute h-full w-full bg-cover bg-center bg-no-repeat"
          ></div>
          <div class="relative z-10 flex h-full flex-col justify-between p-4">
            <p class="text-[12px] text-slate-50">电子竞技</p>
            <h1 class="mt-2 flex-1 text-4xl font-bold text-white">
              赛博养生 / 工地竞技
            </h1>
            <p class="mt-2 self-end text-right text-sm text-slate-100">
              无限暖暖 / Splatoon 2|3
            </p>
          </div>
        </a>
      </div>

      <!-- 运动/电影 -->
      <div
        class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0"
      >
        <!-- 电影 -->
        <div
          class="relative h-72 w-full overflow-hidden rounded-xl md:min-h-[18rem] md:w-[58%]"
        >
          <div
            class="movie-bg absolute h-72 w-full bg-cover bg-center bg-no-repeat"
          ></div>
          <div class="relative z-10 flex h-full flex-col justify-between p-4">
            <p class="text-[12px] text-slate-50">兴趣爱好</p>
            <h1 class="mt-2 flex-1 text-4xl font-bold text-white">
              小说 / <br />动漫漫画
            </h1>
            <p class="mt-2 self-end text-right text-sm text-slate-100">
              “给我破” ——《魔童闹海》
            </p>
          </div>
        </div>
        <!-- 运动 -->
        <div
          class="relative h-72 w-full overflow-hidden rounded-xl md:min-h-[18rem] md:w-[40%]"
        >
          <div
            class="sport-bg absolute h-72 w-full bg-cover bg-center bg-no-repeat"
          ></div>
          <div class="relative flex h-full flex-col justify-between p-4">
            <p class="text-[12px] text-slate-50">体育运动</p>
            <h1 class="mt-2 flex-1 text-4xl font-bold text-white">
              轮滑 | 羽毛球
            </h1>
            <p class="mt-2 self-end text-right text-sm text-slate-100">
              跃动青春
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Countdown from "../components/Widgets/Countdown.vue";
import IconBox from "../components/Widgets/IconBox.vue";
</script>

<style scoped>
.honer-bg {
  background-image: url("./img/honer.jpg");
}
.music-bg {
  background-image: url("./img/music.jpg");
  filter: brightness(0.6);
}
.game-bg {
  background-image: url("./img/game.jpg");
  filter: brightness(0.8);
}
.sport-bg {
  background-image: url("./img/sport.jpg");
  filter: brightness(0.6);
}
.movie-bg {
  background-image: url("./img/movie.jpg");
  filter: brightness(0.6);
}
.avatar-ping {
  animation: avatarPing 2s ease-in infinite;
}
@keyframes avatarPing {
  0%,
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1.05);
  }
  50% {
    transform: translateX(-50%) translateY(-50%) scale(1.1);
  }
}
.tag-bounce {
  animation: tagBounce 1.5s ease-in infinite;
}
@keyframes tagBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
}
</style>
