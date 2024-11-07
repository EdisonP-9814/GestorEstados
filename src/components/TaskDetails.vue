<template>
  <div v-if="task">
    <h1>Detalles de la Tarea</h1>
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <p>Estado: {{ task.completed ? 'Completada' : 'Pendiente' }}</p>
    <router-link :to="`/edit/${task.id}`">Editar</router-link>
  </div>
  <div v-else>
    <p>Tarea no encontrada</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTaskStore } from '../stores/taskStore'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'TaskDetails',
  setup() {
    const taskStore = useTaskStore()
    const route = useRoute()

    const task = computed(() => {
      const taskId = Number(route.params.id)
      return taskStore.getTaskById(taskId)
    })

    return {
      task,
    }
  },
})
</script>
