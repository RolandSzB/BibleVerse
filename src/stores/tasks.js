import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      lists: [],
    };
  },
  actions: {
    addTask(id, name, favorite) {
      this.lists.push({
        id,
        name,
        favorite,
      });
      localStorage.setItem("lists", JSON.stringify(this.lists));
    },
    editTask(taskID, value) {
      const taskIndex = this.lists.findIndex(task => task.id === taskID);
      this.lists[taskIndex].name = value;
      localStorage.setItem("lists", JSON.stringify(this.lists));
    },
    toggleFavorite(taskID) {
      const taskIndex = this.lists.findIndex(task => task.id === taskID);
      this.lists[taskIndex].favorite = !this.lists[taskIndex].favorite;
      localStorage.setItem("lists", JSON.stringify(this.lists));
    },
    deleteTask(taskID) {
      const taskIndex = this.lists.findIndex(task => task.id === taskID);
      this.lists.splice(taskIndex, 1);
    },
  },
});
