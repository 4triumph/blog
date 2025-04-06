<template>
  <div class="mt-2 overflow-hidden">
    <div class="icon-scroll flex w-fit gap-4">
      <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-green-100 p-4">
        <img src="./img/vue.svg" alt="" />
      </div>
      <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-sky-100 p-4">
        <img src="./img/react.png" alt="" />
      </div>
      <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-red-100 p-4">
        <img src="./img/html.svg" alt="" />
      </div>
      <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-cyan-100 p-4">
        <img src="./img/css.svg" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-yellow-300 p-4"
      >
        <img class="rounded-lg" src="./img/js.webp" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-sky-100 p-4"
      >
        <img class="rounded-lg" src="./img/typescript.png" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-teal-100 p-4"
      >
        <img src="./img/tailwind.svg" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-purple-100 p-4"
      >
        <img class="rounded-lg" src="./img/vite.svg" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-yellow-200 p-4"
      >
        <img class="rounded-lg" src="./img/pinia.svg" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-red-400 p-4"
      >
        <img class="rounded-lg" src="./img/git.svg" alt="" />
      </div>
      <div
        class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-slate-100 p-4"
      >
        <img class="rounded-lg" src="./img/python.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconBox",
  data() {
    return {
      icons: [
        { src: "./img/vue.svg", alt: "Vue.js", bgClass: "bg-green-100" },
        { src: "./img/react.png", alt: "React", bgClass: "bg-sky-100" },
        { src: "./img/html.svg", alt: "HTML", bgClass: "bg-red-100" },
        { src: "./img/css.svg", alt: "CSS", bgClass: "bg-cyan-100" },
        { src: "./img/js.webp", alt: "JavaScript", bgClass: "bg-yellow-300" },
        {
          src: "./img/typescript.png",
          alt: "TypeScript",
          bgClass: "bg-sky-100",
        },
        {
          src: "./img/tailwind.svg",
          alt: "Tailwind CSS",
          bgClass: "bg-teal-100",
        },
        { src: "./img/vite.svg", alt: "Vite", bgClass: "bg-purple-100" },
        { src: "./img/pinia.svg", alt: "Pinia", bgClass: "bg-yellow-200" },
        { src: "./img/git.svg", alt: "Git", bgClass: "bg-red-400" },
        { src: "./img/python.svg", alt: "Python", bgClass: "bg-slate-100" },
      ],
    };
  },
};
</script>

<style scoped>
.icon-scroll {
  animation: iconScroll 20s linear infinite;
}
@keyframes iconScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
