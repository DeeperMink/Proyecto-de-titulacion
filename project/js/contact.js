var data = {
  contact: {
    name:"",
    email:"",
    subject:"",
    message:""
  }
}

const app = new Vue({
  el: '#app',
  data: data,
  methods:{
    sendEmail: function(){
      this.$http.post('https://bireport-4aedd.firebaseio.com/posts.json', this.contact)
        .then(function(data){
          console.log(data);
      })
    }
  }
})