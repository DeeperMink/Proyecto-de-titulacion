var data = {
  personal: {
    name: "",
    address: "",
    date: "",
    income: 0,
    position: "",
    sex: ""
  },
  employees: [],
  total: 0,
  emailList: [],
  username: ""
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getEmployees: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/employees.json', this.contact)
        .then(function (data) {
          return data.json();
        }).then(function(data){
          var employeesList = [];
          for(let key in data){
            data[key].id = key
              employeesList.push(data[key]);
          }
          this.employees = employeesList
          this.totalIncome();
        })
     },

    totalIncome: function(){
      let total = 0;
      this.employees.forEach(function(element){
        total += element.income;
      })
      console.log(total)
      this.total = total;
    },

    sendMessage: function (data) {
      console.log(data);
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

    panelPrincipal: function () {
      window.location.href = `dashboard.html?user=${this.username}`
    }
  },
  beforeMount() {
    this.getEmployees();
  }
})