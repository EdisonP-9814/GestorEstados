import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskDetails from '@/components/TaskDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList,
  },
  {
    path: '/add',
    name: 'AddTask',
    component: TaskForm,
  },
  {
    path: '/edit/:id',
    name: 'EditTask',
    component: TaskForm,
  },
  {
    path: '/task/:id',
    name: 'TaskDetails',
    component: TaskDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
