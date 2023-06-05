const { createApp } = Vue;

createApp({
  data() {
    return {
      memberList: ["gino", "ginetto", "ginettino", "ginello"],

      message: 'Hello V-FOR',
      
    }
  }
}).mount('#app');