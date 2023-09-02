const { createApp } = Vue

createApp({
  data() {
    return {
      message:'hi',
      contacts:contacts,
    }
  }
}).mount('#app')
console.log(contacts[4].avatar);
console.log(contacts[0].avatar);