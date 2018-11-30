var config = {
  apiKey: "AIzaSyDeR-reyxCfvZEQ9mtRJgBRU7zrja41_2g",
  authDomain: "bireport-4aedd.firebaseapp.com",
  databaseURL: "https://bireport-4aedd.firebaseio.com",
  projectId: "bireport-4aedd",
  storageBucket: "bireport-4aedd.appspot.com",
  messagingSenderId: "922361070341"
};

var data = {
  username: "",
  password: "",
  comparatePassword: ""
}

const app = new Vue({
  el: '#app',
  data: data,
  methods:{
    registerNewUser: function(){
      firebase.auth().createUserWithEmailAndPassword(`${this.username}`, `${this.password}`)
    }
  }
})