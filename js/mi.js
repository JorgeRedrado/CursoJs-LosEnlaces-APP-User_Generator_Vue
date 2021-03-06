const miapp = new Vue({
  el: "#contenedor",
  data: {
    titulo: "Random User Generator con Vue.js",
    busqueda: "",
    url: "https://randomuser.me/api/?results=50&nat=es",
    listado: []
  },
  computed: {
    listadoFiltrado() {
      return this.listado.filter(usuario =>
        usuario.nombre.includes(this.busqueda)
      );
    }
  },
  metods: {},
  mounted() {
    console.log("Vue Montado...");
    axios
      .get(this.url)
      .then(respuesta => {
        console.log(respuesta.data.results);
        this.listado = respuesta.data.results.map(usuario => {
          return {
            nombre: `${usuario.name.title} ${usuario.name.first} ${
              usuario.name.last
            }`,
            mail: usuario.email,
            foto: usuario.picture.large
          };
        });
        console.log(this.listado);
      })
      .catch(respuesta => {
        console.log(respuesta);
      });
  }
});
