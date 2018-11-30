var data = {
  contact: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  inbox:[],
  username: "",
  emailList: []
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getDataFromUser: function () {
      let url = document.location.href;
      let parseUrl = new URL(url);
      let username = parseUrl.searchParams.get('user');
      this.username = username;
      console.log(username)
    },

    sendEmail: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/posts.json', this.contact)
        .then(function (data) {
          console.log(data);
          console.log(data.json());
          return data.json();
        }).then(function(data){
          var messagesList = [];
          for(let key in data){
            data[key].id = key 
              messagesList.push(data[key]);
          }
          this.inbox = messagesList;
        })
    },

    sendMessage: function(data){
      console.log(data);
      this.$http.delete(`https://bireport-4aedd.firebaseio.com/posts/${data.id}.json`)
        .then(function(data){
          console.log(data);
        })
      location.reload();
      window.open(`mailto:${data.email}?subject=${data.subject}&body=${data.message}`);
    },

    getDataFromUser: function () {
      let url = document.location.href;
      let parseUrl = new URL(url);
      let username = parseUrl.searchParams.get('user');
      this.username = username;
      console.log(username)
    },

    getAllMessages: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/posts.json', this.contact)
        .then(function (data) {
          return data.json();
        }).then(function (data) {
          var emailList = [];
          for (let key in data) {
            data[key].id = key
            emailList.push(data[key]);
          }
          this.emailList = emailList;
        })
    },

    panelPrincipal: function() {
      window.location.href = `dashboard.html?user=${this.username}`
    }

  },
  beforeMount(){
    this.sendEmail();
    this.getAllMessages();
  }
})