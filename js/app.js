const { createApp } = Vue

createApp({
  data() {
    return {
      searchBar:'',
      newMessage:'',
      contacts:contacts,
      activeChat:0,
      actualTime:formattedDate,
      atuoReply: false
    }
  },
  methods:{
    goTo(index){
      this.activeChat = index
    },
    addNewMessage(activeChat){
      const newMessageObj={
        date: this.actualTime,
        message: this.newMessage,
        status: 'sent'
      }
      this.contacts[this.activeChat].messages.push(newMessageObj)
      this.newMessage =''
      this.setAutoReply()
      console.log('funge')

    },
    handleKeyDown(event) {
      if (event.key == 'Enter' || event.code == 'Enter') this.addNewMessage(this.activeChat) 
    },
    autoMessage(activeChat){
      const newMessageObj={
        date: this.actualTime,
        message: 'ok',
        status: 'received'
      }
      this.contacts[this.activeChat].messages.push(newMessageObj)
    },
    setAutoReply(){
      this.atuoReply = setTimeout(()=>{
        this.autoMessage(this.activeChat)
      },2000)
    },

  },
  created() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
}).mount('#app')
