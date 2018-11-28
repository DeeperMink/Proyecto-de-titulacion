var data = {
  personal: {
    name: "",
    address: "",
    date: "",
    income: 0,
    position: "",
    sex: ""
  },
  clients: [],
  total: 0
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getClients: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/clients.json', this.contact)
        .then(function (data) {
          return data.json();
        }).then(function (data) {
          var clientsList = [];
          for (let key in data) {
            data[key].id = key
            clientsList.push(data[key]);
          }
          this.clients = clientsList
          this.totalIncome();
        })
    },

    totalIncome: function () {
      let total = 0;
      this.clients.forEach(function (element) {
        total += element.income;
      })
      console.log(total);
      this.total = total;
    },

    sendMessage: function (data) {
      console.log(data);
      window.open(`mailto:${data.email}?subject=${data.subject}&body=${data.message}`);
    }
  },
  beforeMount() {
    this.getClients();
  }
})