var DateTime = luxon.DateTime.now();
console.log(DateTime);
const { createApp } = Vue

createApp({
  data() {
    return {
      searchBar:'',
      newMessage:'',
      contacts:contacts,
      activeChat:0,
      actualTime:formattedDate,
      atuoReply: false,
      dropdown:{
        index : 0,
        show : false,
      }
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
    handleDropdown(index){
      if (this.dropdown.index == index && this.dropdown.show == true) {
        
        this.dropdown.index = index
        this.dropdown.show = false
      }else{
              this.dropdown.index = index
              this.dropdown.show = true
      }

      console.log(this.dropdown);
    },
    removeMessage(index){
      console.log(this.contacts[this.activeChat].messages[index]);
      this.dropdown.index = index
      this.dropdown.show = false
      this.contacts[this.activeChat].messages.splice(index,1)
    },
    formatMessageDate(dateString) {
      const date = DateTime.fromISO(dateString);
      return date.toFormat('mm:ss');
    }

  },
  created() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
}).mount('#app')
