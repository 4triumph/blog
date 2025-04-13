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
    banner: '/project-img/student-management.png',
    title: 'Student Management System',
    description: '一个学生管理系统，实现了学生信息的增改查、分页、搜索等功能',
    link: 'https://github.com/4triumph/Student_Management',
    tag: 'React'
  }
]
