

/**
 * 计算滚动高度和滚动百分比
 */
export const calculateScroll = throttle(
  () => {
    try {
      if (typeof window === "undefined" || typeof document === "undefined") return false;
      const store = mainStore();
      const scrollY = window.scrollY || window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = ((scrollY / totalHeight) * 100).toFixed(0);
      const scrollDirection = scrollY > store.scrollData.height ? "down" : "up";
      store.scrollData = {
        height: Number(scrollY.toFixed(0)),
        percentage: Number(scrollPercentage),
        direction: scrollDirection,
      };
    } catch (error) {
      console.error("计算滚动时出现错误：", error);
    }
  },
  300,
  { leading: true, trailing: false }
);

/**
 * 平滑滚动至目标高度或元素
 */
export const smoothScrolling = (target: number | HTMLElement | string = 0) => {
  try {
    if (typeof window === "undefined") return;
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else if (target instanceof HTMLElement) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    } else if (typeof target === "string" && target.startsWith("#")) {
      const element = document.querySelector(target);
      if (element instanceof HTMLElement) {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } catch (error) {
    console.error("平滑滚动出错：", error);
  }
};

/**
 * 格式化时间戳为相应的日期格式
 */
export const formatTimestamp = (timestamp: number): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 1000 * 60 * 60 * 24);
  const targetDate = new Date(timestamp);

  if (targetDate >= yesterday && targetDate < today) {
    return "1天前";
  } else {
    const difference = Math.floor((today.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));
    if (difference <= 0) {
      return "今日内";
    } else if (difference < 7) {
      return `${difference}天前`;
    } else {
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth() + 1;
      const day = targetDate.getDate();
      return year === now.getFullYear() ? `${month}/${day}` : `${year}/${month}/${day}`;
    }
  }
};

/**
 * 计算给定日期与当前日期相差的天数
 */
export const daysFromNow = (dateStr: string): number => {
  const currentDate = new Date();
  const inputDate = new Date(dateStr);
  const timeDiff = currentDate.getTime() - inputDate.getTime();
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
};

/**
 * 随机前往一篇文章
 */
/* let lastIndex = -1;
export const shufflePost = (postData: { regularPath: string }[]): string => {
  let randomIndex: number;
  do {
    randomIndex = Math.floor(Math.random() * postData.length);
  } while (randomIndex === lastIndex && postData.length > 1);
  lastIndex = randomIndex;
  return postData[randomIndex].regularPath;
}; */

/**
 * 复制文本到剪贴板
 */
export const copyText = async (data: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(data);
      (window as any).$message?.success("复制成功，在转载时请标注本文地址");
    } catch (error) {
      console.error("复制出错：", error);
      (window as any).$message?.error("复制出现错误，请重试");
    }
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = data;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      (window as any).$message?.success("复制成功，在转载时请标注本文地址");
    } catch (err) {
      console.error("复制出错：", err);
      (window as any).$message?.error("复制出现错误，请重试");
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

/**
 * 图片 URL 复制到剪贴板
 */
export const copyImage = async (imageURL: string) => {
  if (!navigator.clipboard) {
    console.error("浏览器不支持 Clipboard API");
    return;
  }
  try {
    const response = await fetch(imageURL);
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({ [blob.type]: blob }),
    ]);
    console.log("图片已复制到剪贴板");
    (window as any).$message?.success("图片已复制到剪贴板");
  } catch (error) {
    console.error("复制图片出错：", error);
    (window as any).$message?.error("复制图片错误，请重试");
  }
};

/**
 * 下载图片
 */
export const downloadImage = (imageUrl: string) => {
  try {
    const date = new Date();
    const timestamp = date.toISOString().replace(/[:.]/g, "-");
    const imageName = `image-${timestamp}.jpg`;
    const anchor = document.createElement("a");
    anchor.download = imageName;
    anchor.href = imageUrl;
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  } catch (error) {
    console.error("下载图片出错：", error);
    (window as any).$message?.error("下载图片错误，请重试");
  }
};

/**
 * 获取根据当前时间的问候语
 */
export const getGreetings = (): string => {
  const hour = new Date().getHours();
  if (hour < 6) return "凌晨好，昨晚睡得怎么样？";
  if (hour < 9) return "早上好，今天也要开心哦！";
  if (hour < 12) return "上午好，今天也要加油哦！";
  if (hour < 14) return "中午好，吃饱了精神好！";
  if (hour < 17) return "下午好，继续加油！";
  if (hour < 19) return "傍晚好，是时候放松一下了！";
  if (hour < 22) return "晚上好，是时候休息了！";
  return "夜深了，明天继续加油！";
};

/**
 * 打乱数组 - Fisher-Yates 洗牌算法
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * 特殊纪念日置灰
 */
export const specialDayGray = () => {
  const specialDays = [
    { date: "4-4", name: "清明节" },
    { date: "5-12", name: "汶川大地震纪念日" },
    { date: "7-7", name: "中国人民抗日战争纪念日" },
    { date: "9-18", name: "九·一八事变纪念日" },
    { date: "12-13", name: "南京大屠杀死难者国家公祭日" },
  ];

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const currentDate = `${month}-${day}`;
  const specialDay = specialDays.find((day) => day.date === currentDate);

  if (specialDay) {
    document.documentElement.classList.add("gray");
    (window as any).$message?.info(`今天是${specialDay.name}，特此默哀`, {
      duration: 8000,
      close: true,
    });
  }
};
