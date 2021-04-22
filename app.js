Vue.createApp({
  data() {
    return {
      value: "",
      
     
    }
  },
  methods: {
    write(num){
      this.value = `${this.value + num}`
    },
    delAll(){
      this.value = ''
    },
    writeDote(dote){
      if( this.value.indexOf(dote) === -1  ) {
      this.value = ` ${this.value + dote}`
      }
      
    },
    calculate() {
      this.value = eval(this.value) 
    },
    percentage(){
      this.value = Number(this.value) 
      this.value = this.value / 100
    }
  }
  
}).mount('#app')