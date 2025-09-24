interface Project {
  banner: string // 图片链接
  title: string // 项目标题
  description: string // 项目简介
  link: string // 项目链接
  tag?: string // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: '/project-img/ocean-visualization.png',
    title: 'Ocean Visualization System',
    description: '一个海洋可视化系统，利用 Echarts 实现数据联动和图表可视化，结合 Cesium 进行三维气象和生物数据展示，打造立体数据可视化体验',
    link: 'https://github.com/4triumph/Student_Management',
    tag: 'JavaScript'
  },
  {
    banner: '/project-img/student-management.png',
    title: 'Student Management System',
    description: '一个学生管理系统，实现了学生信息的视角转换、分页、搜索等功能',
    link: 'https://github.com/4triumph/Student_Management',
    tag: 'React'
  },
  {
    banner: '/project-img/takeout.png',
    title: 'Takeout Mobile Application',
    description: '对移动端外卖的模仿，实现了菜品的下单、查看订单等功能',
    link: 'https://github.com/4triumph/takeout-demo',
    tag: 'Vue'
  },
  {
    banner: '/project-img/backend-management.png',
    title: 'Backend Management System',
    description: '系统实现了用户权限管理、动态路由、状态持久化存储等功能，通过 Mock 数据模拟后端接口，提升开发效率。',
    link: 'https://github.com/4triumph/takeout-demo',
    tag: 'Vue'
  }
]
