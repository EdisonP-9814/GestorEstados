<template>
  <div class="about">
    <h1>Acerca de la Aplicación de Gestión de Tareas</h1>
    <p>
      Esta aplicación de gestión de tareas fue desarrollada utilizando Vue 3 con TypeScript, Pinia
      para la gestión de estados y Vue Router para la navegación.
    </p>
    <h2>Características principales:</h2>
    <ul>
      <li>Ver lista de tareas</li>
      <li>Agregar nuevas tareas</li>
      <li>Editar tareas existentes</li>
      <li>Marcar tareas como completadas</li>
      <li>Eliminar tareas</li>
    </ul>
    <p>Versión: 1.0.0</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>
