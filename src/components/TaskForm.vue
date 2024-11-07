<template>
  <div>
    <h1>{{ isEditing ? 'Editar Tarea' : 'Agregar Tarea' }}</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="title">Título:</label>
        <input id="title" v-model="task.title" required />
      </div>
      <div>
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="task.description"></textarea>
      </div>
      <button type="submit">{{ isEditing ? 'Actualizar' : 'Agregar' }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useTaskStore } from '../stores/taskStore'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'TaskForm',
  setup() {
    const taskStore = useTaskStore()
    const route = useRoute()
    const router = useRouter()

    const task = ref({
      id: 0,
      title: '',
      description: '',
      completed: false,
    })

    const isEditing = ref(false)

    onMounted(() => {
      const taskId = Number(route.params.id)
      if (taskId) {
        isEditing.value = true
        const existingTask = taskStore.getTaskById(taskId)
        if (existingTask) {
          task.value = { ...existingTask }
        }
      }
    })

    const handleSubmit = () => {
      if (isEditing.value) {
        taskStore.updateTask(task.value)
      } else {
        taskStore.addTask(task.value)
      }
      router.push('/')
    }

    return {
      task,
      isEditing,
      handleSubmit,
    }
  },
})
</script>
