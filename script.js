
const app = new Vue({
  el: '#app',

  data:{
    arrMail: [],
    loading:true,
    
  },

  methods: {
    generaArrMail(){
      for (let index = 0; index < 10; index++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
        console.log(risposta.data);
        this.arrMail.push(risposta.data.response)
        console.log(this.arrMail);
        
        });
      };
      this.loading = false;
      
    }
    
  },


  mounted() {
    setTimeout(this.generaArrMail, 2000);

  
  },
});


