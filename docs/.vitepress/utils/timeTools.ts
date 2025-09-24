import dayjs from "dayjs";

// 定义时间单位的类型
type TimeUnit = "day" | "week" | "month" | "year";

// 定义返回的时间信息类型
interface TimeRemaining {
  name: string;
  total: number;
  passed: number;
  remaining: number;
  percentage: string;
}

/**
 * 获取时间剩余的函数
 * @return {Record<TimeUnit, TimeRemaining>} 包含 day、week、month 和 year 的剩余时间信息
 */
export const getTimeRemaining = (): Record<TimeUnit, TimeRemaining> => {
  const now = dayjs();
  const dayText: Record<TimeUnit, string> = {
    day: "今日",
    week: "本周",
    month: "本月",
    year: "本年",
  };

  /**
   * 计算时间差的函数
   * @param {TimeUnit} unit 时间单位，可以是 'day', 'week', 'month', 'year'
   */
  const getDifference = (unit: TimeUnit): TimeRemaining => {
    const start = now.startOf(unit);
    const end = now.endOf(unit);
    const total = end.diff(start, unit === "day" ? "hour" : "day") + 1;
    
    let passed: number;
    if (unit === "week" && now.day() === 0) {
      passed = total - 1;
    } else {
      passed = now.diff(start, unit === "day" ? "hour" : "day");
    }
    
    const remaining = total - passed;
    const percentage = ((passed / total) * 100).toFixed(2);
    
    return {
      name: dayText[unit],
      total,
      passed,
      remaining,
      percentage,
    };
  };

  return {
    day: getDifference("day"),
    week: getDifference("week"),
    month: getDifference("month"),
    year: getDifference("year"),
  };
};

/**
 * 计算当前日期距离指定日期的天数
 * @param {string} dateStr - 指定的日期，格式为 'YYYY-MM-DD'
 * @return {number} 返回的天数
 */
export const getDaysUntil = (dateStr: string): number => {
  const now = dayjs();
  const targetDate = dayjs(dateStr);
  return targetDate.diff(now, "day");
};

/**
 * 格式化日期字符串。
 * 如果日期与当前年份相同，则返回 "月/日" 格式
 * 如果日期不与当前年份相同，则返回 "年/月/日" 格式
 * @param {string} dateString - 需要转换的日期字符串，格式为 "YYYY/MM/DD" 或 "YYYY-MM-DD"
 * @returns {string} 格式化后的日期。
 */
export const formatDate = (dateString: string): string => {
  const currentYear = new Date().getFullYear();
  const date = new Date(dateString.replace(/-/g, "/"));
  
  return date.getFullYear() === currentYear
    ? `${date.getMonth() + 1}/${date.getDate()}`
    : `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
