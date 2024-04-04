import { defineStore } from "pinia";

export const useVerseHistoryStore = defineStore({
  id: "verseHistory",
  state: () => ({
    verses: [],
  }),
  actions: {
    addVerse(verse) {
      if (this.verses.length >= 5) {
        this.verses.pop();
      }
      this.verses.unshift(verse);
    },
  },
});
