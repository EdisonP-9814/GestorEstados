<template>
  <div class="home">
    <h1>Gestión de Tareas</h1>
    <TaskList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskList from '@/components/TaskList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TaskList,
  },
})
</script>
