const consola = {
    nombre: "Wii",
    marca: "Nintendo",
    fabricacion:{
        pais: "japon",
        fecha: "2010"
    },
    arquitectura:{
        controles: 2,
        cargador: 1,
        consola: 1
    }
}
document.getElementById("consola").innerHTML=consola.nombre
document.getElementById("fabricacion").innerHTML=consola.fabricacion.pais