<template>
  <div>
    <h1>Lista de Tareas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.completed" @change="toggleTaskCompletion(task.id)" />
        <router-link :to="`/task/${task.id}`">{{ task.title }}</router-link>
        <button @click="deleteTask(task.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTaskStore } from '../stores/taskStore'

export default defineComponent({
  name: 'TaskList',
  setup() {
    const taskStore = useTaskStore()

    return {
      tasks: taskStore.getTasks,
      toggleTaskCompletion: taskStore.toggleTaskCompletion,
      deleteTask: taskStore.deleteTask,
    }
  },
})
</script>
