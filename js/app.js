const { createApp } = Vue

createApp({
  data() {
    return {
      
      contacts:contacts,
      activeChat:0,

    }
  },
  methods:{
    goTo(index){
      this.activeChat = index
    },
  }
}).mount('#app')
