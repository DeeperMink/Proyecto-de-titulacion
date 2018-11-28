var data = {
  personal: {
    name: "",
    address: "",
    date: "",
    income: 0,
    position: "",
    sex: ""
  },
  sales: [],
  clients: [],
  total: 0
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getSales: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/sales.json', this.contact)
        .then(function (data) {
          return data.json();
        }).then(function (data) {
          var salesList = [];
          for (let key in data) {
            data[key].id = key
            salesList.push(data[key]);
          }
          this.sales = salesList;
          this.totalAmount();
        })
    },

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
          this.clients = clientsList;
        })
    },

    getClientNameWithTheId: function(id){
      let name = "";
      this.clients.forEach(function(element){
        (element.idClient == id) ? name = element.business : "";
      });
      return name;
    },

    totalAmount: function(){
      let total = 0;
      this.sales.forEach(function(element){
        total += element.amount;
      });
      this.total = total;
    },

    sendMessage: function (data) {
      console.log(data);
      window.open(`mailto:${data.email}?subject=${data.subject}&body=${data.message}`);
    }
  },
  beforeMount() {
    this.getSales();
    this.getClients();
  }
})