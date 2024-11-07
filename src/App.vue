<template>
  <div id="app">
    <nav>
      <router-link to="/">Tareas</router-link> |
      <router-link to="/add">Agregar Tarea</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
