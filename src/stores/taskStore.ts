import { defineStore } from 'pinia'

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  getters: {
    getTasks: (state) => state.tasks,
    getTaskById: (state) => (id: number) => state.tasks.find((task) => task.id === id),
  },
  actions: {
    addTask(task: Omit<Task, 'id'>) {
      const newTask = { ...task, id: Date.now() }
      this.tasks.push(newTask)
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
      }
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    toggleTaskCompletion(id: number) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})
