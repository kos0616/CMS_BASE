// getList.js
import { defineStore } from 'pinia';

export const useTestStore = defineStore('Test', {
  state: () => ({
    isTest: true
    // Your state properties
  }),
  getters: {
    // Your getters
  },
  actions: {
    // Your actions
  }
});
