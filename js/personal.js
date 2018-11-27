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
  total: 0
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
    }
  },
  beforeMount() {
    this.getEmployees();
  }
})