<script setup>
const props = defineProps({
  taskID: {
    type: String,
    required: true,
  },
});

import { useTasksStore } from "@/stores/tasks.js";
const tasksStore = useTasksStore();

function deleteTask() {
  tasksStore.deleteTask(props.taskID);
}

function toggleFavorite() {
  tasksStore.toggleFavorite(props.taskID);
}

defineEmits(["editTask", "toggleFavorite"]);

import { computed } from "vue";

const isFavorite = computed(() => {
  const taskIndex = tasksStore.lists.findIndex(task => task.id === props.taskID);
  return tasksStore?.lists[taskIndex]?.favorite;
});
</script>
<template>
  <div class="ms-10">
    <button @click="deleteTask"><i class="bi bi-trash mx-3"></i></button>
    <button @click="$emit('editTask')"><i class="bi bi-pen"></i></button>
    <button @click="toggleFavorite" class="mx-3">
      <i v-if="isFavorite" class="bi bi-star-fill text-yellow-500"></i>
      <i v-else class="bi bi-star"></i>
    </button>
  </div>
</template>
