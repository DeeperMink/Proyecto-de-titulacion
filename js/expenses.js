var data = {
  expenses: [],
  total:{
    income:0,
    rent:0,
    water:0,
    light:0,
    internet:0
  }
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getExpenses: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/expenses.json', this.contact)
        .then(function (data) {
          return data.json();
        }).then(function (data) {
          var expensesList = [];
          for (let key in data) {
            data[key].id = key
            expensesList.push(data[key]);
          }
          this.expenses = expensesList;
          this.totalExpenses();
        })
    },

    totalExpenses: function () {
      let total = {income:0, rent:0, water:0, light:0, internet:0};
      this.expenses.forEach(function (element) {
        total.income += element.personalIncome;
        total.rent += element.rent;
        total.water += element.water;
        total.light += element.light;
        total.internet += element.internet;
      })
      console.log(total)
      this.total = total;
    }
  },
  beforeMount() {
    this.getExpenses();
  }
})