Vue.use(VueHighcharts);

var data = {
  username: "",
  clients:{
    id: 0,
    name:"",
    address:"",
    business:"",
    number:""
  },
  employee:{
    id: 0,
    name: "",
    sex: "",
    position: "",
    date: "",
    income: 0,
    number: "",
    address: ""
  },
  employees:[],
  sales:{
    id: 0,
    client: 0,
    amount: 0,
    thing: "",
    business: "",
    year: 0,
    cost: 0
  },
  totalSales: 0,
  firstPartOfYear:{
    max: 2000,
    counter: 400
  },
  secondPartOfTheYear:{
    max: 2000,
    counter: 400
  },
  thirdPartOfTheYear:{
    max: 2000,
    counter: 400
  },
  fourthPartOfTheYear:{
    max: 2000,
    counter: 400
  },
  exampleBar:{
    width: "78%"
  },
  max: 0,
  dataForProgress: [],

  options:{
    title: {
      text: 'Gráfica de ganancias',
      x: -20 //center
    },
    subtitle: {
      text: 'BiReport',
      x: -20
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: ''
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valuePrefix: '$'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Ventas',
      data: []
    }, {
      name: 'Gastós de ventas',
      data: []
    }, {
      name: 'Gastós Administratívos',
      data: []
    }]
  },
  a1: 0,
  a2: 0,
  a3: 0,
  a4: 0,
  a5: 0,
  percentaje: 0,
  mau: 0,
  years: [],
  totalAmountPerYear: [],
  totalIncomeEmployeesPerYear: [],
  totalSalesPerYear:[],
  totalIncome: []
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getDataFromUser: function(){
      let url = document.location.href;
      let parseUrl = new URL(url);
      let username = parseUrl.searchParams.get('user');
      this.username = username;
      console.log(username)
    },

    fillDataClients: function () {
      let names = ["EDGARDO", "EDITH", "EDMUNDO", "EDUARDO", "EFRAÍN", "EFRÉN", "ELENA", "ELEONOR", "ELÍAS", "ELISA", "ELISABETH", "ELOISA", "ELOY", "ELSA", "ELVIRA", "EMILIA", "EMILIO", "EMA", "EMANUEL", "EMILIO"];
      let addresses = ["CALLE AGUSTIN LARA NO. 69-B", " AV. INDEPENDENCIA NO. 241", " AV. INDEPENDENCIA NO. 779", " AV. 20 DE NOVIEMBRE NO.1024", " CARRETERA A LOMA ALTA S/N.", " AV. 20 DE NOVIEMBRE NO. 1060", " CALLE ZARAGOZA NO. 1010", " CALLE MATAMOROS NO. 310", " AV. 20 DE NOVIEMBRE NO.859-B", " AV. 20 DE NOVIEMBRE NO 1053", " BLVD. BENITO JUAREZ NO. 1466-A", " CALLE MATAMOROS NO.280", " AV. INDEPENDENCIA NO. 545", " AV. INDEPENDENCIA NO. 1282-A", " CALLE MATAMOROS NO. 127", " AV.INDEPENDENCIA NO.1010", " AV. 5 DE MAYO NO. 1652", " AV. 5 DE MAYO NO. 1108", " AV. INDEPENDENCIA NO. 748", " AV. INDEPENDENCIA NO. 985-A"];
      let bussiness = ["Cafeterías y venta de té", "Industria cultural y creativa", "Restaurantes de baja inversión", "Industria alimentaria", "Belleza al menudeo", "Tecnologías de la Información", "Educación extra escolar", "Energías renovables", "Arreglo de ropa y calzado", "Turismo", "Cafeterías y venta de té", "Industria cultural y creativa", "Restaurantes de baja inversión", "Industria alimentaria", "Belleza al menudeo", "Tecnologías de la Información", "Educación extra escolar", "Energías renovables", "Arreglo de ropa y calzado", "Turismo"];
      let numbers = ["91-(287)-5-27-81", "91-(287 )- 5-00-17", "91-(287)- 5-42-73 - 5 40 99", "91-(287 )-5-14-17", "91-(287)-5-39-32", "91-(287 )- 53188 - 5 02 86", "91-(287)- 5-38-32", "91(287)5-15-79 - 5 23 40", "91-(287)-50605", "91-(287)-5-38-32", "01 287 5 21 80", "5 12 14", "01 287 5 35 05", "01 287 5 35 59", "01 287 5 37 77", "01 287 5 30 90", "01 287 5 43 12", "91-(287)-5-25-69", "91-(287)- 5-25-69", "91-(287) :91-(287)-5-25-82 - 5-32-19"];
      for (let i = 0; i < 20; i++) {
        console.log(i);
        this.clients.idClient = i;
        this.clients.name = name[i];
        this.clients.address = addresses[i];
        this.clients.business = bussiness[i];
        this.clients.number = numbers[i];
        this.$http.post('https://bireport-4aedd.firebaseio.com/clients.json', this.clients)
          .then(function (data) {
            console.log(data);
          })
      }
    },

    fillDataEmployees: function(){
      let names = ["JUAN PEREZ","MARIA RICAURTE","RENE RIVAS","RICARDO LEON","PEDRO CIFUENTES","JUAN ARBOLEDA","LUISA HERRERA","PATRICIO SOSA","EDUARDO MALO","ROCIO LARREA","CATALINA GUERRA","FERNANDO ORTIZ","MARIO GUERRON","ANA LLERENA","PABLO PITARQUE","DOLORES RIBADENEIRA","PETER VILLEGAS","JUAN CARLOS SALAS","MARIA SOL GALARZA","MARISOL RESTREPO"];
      let sex = ["MASCULINO", "FEMENINO ", "MASCULINO", "MASCULINO", "MASCULINO", "MASCULINO", "FEMENINO ", "MASCULINO", "MASCULINO", "FEMENINO ", "FEMENINO ", "MASCULINO", "MASCULINO", "FEMENINO ", "MASCULINO", "FEMENINO ", "MASCULINO", "MASCULINO", "FEMENINO ", "FEMENINO "];
      let position = ["AUXILIAR  ", "ASISTENTE ", "AUXILIAR  ", "ASISTENTE ", "JEFE DE PROYECTO", "GERENTE   ", "AUXILIAR  ", "ASISTENTE ", "ASISTENTE ", "ASISTENTE ", "ASISTENTE ", "ASISTENTE ", "AUXILIAR  ", "JEFE DE PROYECTO", "JEFE DE PROYECTO", "ASISTENTE ", "SUPERVISOR", "SUPERVISOR", "ASISTENTE ", "SUPERVISOR"];
      let date = ["01/01/2000", "06/05/1992", "17/02/1988", "12/03/2001", "21/04/1997", "13/07/1999", "04/06/2000", "16/09/1993", "27/12/2003", "12/02/2004", "25/08/2001", "16/11/2002", "11/11/1995", "03/05/1994", "14/01/2003", "07/10/2001", "18/10/1997", "01/04/2000", "14/12/1998", "23/09/1998"];
      let income = [8000, 7500, 7600, 8500, 11000, 12000, 11000, 6500, 7500, 7500, 7500, 7500, 8600, 8000, 8000, 9500, 8000, 8000, 7500, 8000];
      let numbers = ["938205580", "936545115", "938202768", "938727844", "938350521", "938755645", "936520547", "936565656", "936752156", "938300025", "938385567", "937809812", "936520741", "938202456", "938754554", "936875544", "935880712", "936875255", "936542775"];
      let addresses = ["CALLE BOULEVARD MIGUEL DE CERVANTES SAAVEDRA No. 183", "ROA BARCENAS No. 98 - C", "NIÑOS HÉROES No. 30 C", "SALVADOR DÍAZ MIRON No. 216", "JOSÉ F. GUTIÉRREZ No. 273", "ROBERTO GAYOL SN", "BOSQUES DE CIRUELOS No. 168", "HERIBERTO FRÍAS 1439", "CALLE NICOLÁS BRAVO No. 2", "LLANO DE LOS EUCALIPTOS MZ. 11", "NORTE 46 A No. 3715", "LUZ SAVIÑON No. 305", "ERASMO CASTELLANOS QUINTO No. 376", "JUAN A. GUTIERREZ No. 15", "AVENIDA TLAHUAC No. 6500", "ERNESTO PUGIBET No. 58", "MANUEL JOSÉ OTHÓN No. 98", "AVENIDA EJERCITO NACIONAL No. 436M", "CUAUHTÉMOC No. 55", "CORONAS No. 120 - 2", "BAHIA DE MAGDALENA No. 22"];
      for(let i = 0; i<names.length; i++){
        console.log(i);
        this.employee.id = i;
        this.employee.name = names[i];
        this.employee.sex = sex[i];
        this.employee.position = position[i];
        this.employee.date = date[i];
        this.employee.income = income[i];
        this.employee.number = numbers[i];
        this.employee.address = addresses[i];
        this.$http.post('https://bireport-4aedd.firebaseio.com/employees.json', this.employee)
          .then(function(data){
            console.log(data);
          })
      }
    },

    fillDataOfNumberOfSales: function(){
      let client = [1, 2, 3, 6, 8, 5, 4, 9, 16, 14, 16, 12, 13, 19, 2, 7, 0, 4, 3, 7, 1, 2, 3, 4, 5];
      let amount = [620005, 640050, 700500, 700500, 625000, 705000, 640506, 680600, 406007, 357000, 408000, 706000, 600090, 410490, 501960, 693260, 683020, 154503, 423455, 690035, 640035, 590035, 790035, 695035, 800035];
      let cost = [10000, 14000, 30000, 2000, 12000, 40000, 2400, 18000, 2000, 10000, 14000, 10000, 23090, 12109, 22019, 2592, 16820, 1145, 121345, 4310, 13000, 14000, 15000, 16000, 21000];
      let thing = ["Publicidad Web - Anuncio", "Publicidad Web - Logotipo", "Desarrollo de aplicación web", "Publicidad Web - Anuncio", "Publicidad Web - Logotipo", "Publicidad Web - Anuncio", "Publicidad Web - Logotipo", "Adword", "Publicidad Web - Logotipo", "Publicidad Web - Anuncio", "Publicidad Web - Logotipo", "Adword", "Adword", "Adword", "Desarrollo de aplicación web", "Adword", "Desarrollo de aplicación web", "Publicidad Web - Anuncio", "Desarrollo de aplicación web", "Desarrollo de aplicación web", "Publicidad Web - Anuncio", "Publicidad Web - Logotipo", "Desarrollo de aplicación web", "Publicidad Web - Anuncio", "Publicidad Web - Logotipo"];
      let business = ["Turismo", "Desarrollo", "Comercio", "Tienda", "Abarrotes", "Turismo", "Consultoria", "Turismo", "Venta de artículos varios", "Transporte", "Venta", "Turismo", "Constructora", "Desarrolladora", "Finanzas", "Call Center", "Abarrotes", "Transporte", "Tienda", "Comercio", "Turismo", "Desarrollo", "Comercio", "Tienda", "Abarrotes"];
      let year = [2013, 2013, 2013, 2014, 2014, 2015, 2016, 2015, 2015, 2015, 2016, 2016, 2016, 2017, 2017, 2017, 2014, 2015, 2014, 2017, 2013, 2014, 2015, 2016, 2017];
      for(let i = 0; i < client.length; i++){
        console.log(i);
        this.sales.id = i;
        this.sales.client = client[i];
        this.sales.amount = amount[i];
        this.sales.thing = thing[i];
        this.sales.business = business[i];
        this.sales.year = year[i];
        this.sales.cost = cost[i];
        this.$http.post('https://bireport-4aedd.firebaseio.com/sales.json', this.sales)
          .then(function(data){
            console.log(data);
          })
      }
    },

    fillDataOfExpenses: function(){
      let idExpense = [];
      let personalIncome = this.totalIncome;
      let rent = [];
      let water = [];
      let light = [];
      let internet = [];
    },

    getEmployees: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/employees.json', this.contact)
        .then(function (data) {
          return data.json();
        }).then(function (data) {
          var employeesList = [];
          for (let key in data) {
            data[key].id = key
            employeesList.push(data[key]);
          }
          this.employees = employeesList
        })
    },

    getTotalAmountOfSales: function(){
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
          this.totalAmountOfSales();
          this.getAllYearsForChart();
          this.amountPerYear();
          this.getAdministrativesExpenses();
          this.salesPerYear();
          this.fillProgressBarData();
        })
    },

    totalAmountOfSales: function () {
      let total = 0;
      this.sales.forEach(function (element) {
        total += element.amount;
      });
      console.log("Ventas totales:", total)
      this.totalSales = total;
    },


    getAllYearsForChart: function(){
      let years = [];
      this.sales.forEach(function(element){
        years.push(element.year);
      })
      this.options.xAxis.categories = years.filter((v, i, a) => a.indexOf(v) === i).sort()
      this.years = years.filter((v, i, a) => a.indexOf(v) === i).sort()
    },

    salesPercentage: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/sales.json')
        .then(function (data) {
          for (var key in data.body) {
            if (data.body.hasOwnProperty(key)) {
              data.body[key].year === 2013 ? this.a1 += data.body[key].amount : this.a1 += 0;
              data.body[key].year === 2014 ? this.a2 += data.body[key].amount : this.a2 += 0;
              data.body[key].year === 2015 ? this.a3 += data.body[key].amount : this.a3 += 0;
              data.body[key].year === 2016 ? this.a4 += data.body[key].amount : this.a4 += 0;
              data.body[key].year === 2017 ? this.a5 += data.body[key].amount : this.a5 += 0;
            }
          }
          console.log("Porcentaje de crecimiento", (((this.a2 - this.a1) / this.a1) + ((this.a3 - this.a2) / this.a2) + ((this.a4 - this.a3) / this.a3) + ((this.a5 - this.a4) / this.a4)) * 100);
          this.percentaje = (((this.a2 - this.a1) / this.a1) + ((this.a3 - this.a2) / this.a2) + ((this.a4 - this.a3) / this.a3) + ((this.a5 - this.a4) / this.a4)) * 100;
          this.getAdministrativesExpenses();
        })
    },

    amountPerYear: function(){
      let amount = [0,0,0,0,0]
      this.sales.forEach(function(element){
        if (element.year == 2013){ amount[0] = amount[0] + element.amount }
        else if (element.year == 2014) { amount[1] = amount[1] + element.amount }
        else if (element.year == 2015) { amount[2] = amount[2] + element.amount }
        else if (element.year == 2016) { amount[3] = amount[3] + element.amount }
        else if (element.year == 2017) { amount[4] = amount[4] + element.amount }
      })
      console.log("Ventas totales por año: ",amount);
      this.totalAmountPerYear = amount
      this.options.series[0].data = amount;
    },

    salesPerYear: function () {
      let sales = [0, 0, 0, 0, 0]
      this.sales.forEach(function (element) {
        if (element.year == 2013) { sales[0] = sales[0] + element.cost }
        else if (element.year == 2014) { sales[1] = sales[1] + element.cost }
        else if (element.year == 2015) { sales[2] = sales[2] + element.cost }
        else if (element.year == 2016) { sales[3] = sales[3] + element.cost }
        else if (element.year == 2017) { sales[4] = sales[4] + element.cost }
      })
      console.log("Costo de ventas totales por año: ", sales);
      this.totalSalesPerYear = sales
      this.options.series[1].data = sales;
    },

    getAdministrativesExpenses: function(){
      let expenses = [0,0,0,0,0]
      this.employees.forEach(function(element){
        expenses[0] = expenses[0] + (element.income * 12);
        expenses[1] = expenses[1] + (element.income * 12);
        expenses[2] = expenses[2] + (element.income * 12);
        expenses[3] = expenses[3] + (element.income * 12);
        expenses[4] = expenses[4] + (element.income * 12);
      })
      console.log("Sueldo de empleados: ", expenses);
      this.totalIncomeEmployeesPerYear = expenses;
      this.totalIncome = this.totalAmountPerYear.reduce((a, b) => a + b, 0);
      console.log("Sueldo total de empleados: ", this.totalIncome);
      this.options.series[2].data = expenses;
    },

    fillProgressBarData: function () {
      let progress = [];
      this.max = this.totalSales;
      for(let i = 0; i < this.totalAmountPerYear.length; i++){
        progress.push(this.totalAmountPerYear[i]);
      }
      this.dataForProgress = progress;
    }

  },

  beforeMount() {
    this.getDataFromUser();
    this.getEmployees();
    this.getTotalAmountOfSales();
    this.salesPercentage();
    //this.fillDataClients();
    //this.fillDataEmployees();
    //this.fillDataOfNumberOfSales();
  },
})