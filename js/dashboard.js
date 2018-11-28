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
  employees:[]
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
        this.clients.id = i;
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
      let income = [1600, 2500, 1600, 2500, 15000, 30000, 1600, 2500, 2500, 2500, 2500, 2500, 1600, 15000, 15000, 2500, 8000, 8000, 2500, 8000];
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
    }
  },

  beforeMount() {
    this.getDataFromUser();
    this.getEmployees();
    //this.fillDataClients();
    //this.fillDataEmployees();
  },
})