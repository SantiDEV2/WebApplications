let Libro1 = {
    nombre:"El Principito",
    fecha_de_publicacion:"1943",
    autor:"Antoine de Saint-Exupéry",
    generos:["Literatura infantil","Fábula","Novela corta","Ficción especulativa"],

    fichabibliografica: function(){
        console.log(`Autor" ${this.autor}. Titulo: ${this.nombre}. Fecha de Publicacion: ${this.fecha_de_publicacion}. Genero: ${this.generos[0]}`)
    }
}

let Libro2 = {
    nombre:"Breve historia del tiempo",
    fecha_de_publicacion:"1988",
    autor:"Stephen Hawking",
    generos: "Divulgación científica",

    fichabibliografica: function(){
        console.log(`Autor" ${this.autor}. Titulo: ${this.nombre}. Fecha de Publicacion: ${this.fecha_de_publicacion}. Genero: ${this.generos}`)
    }
}

let Libro3 = {
    nombre:"Travelling to Infinity",
    fecha_de_publicacion:"2007",
    autor:"Jane Hawking",
    generos:"Bibliografico",

    fichabibliografica: function(){
        console.log(`Autor" ${this.autor}. Titulo: ${this.nombre}. Fecha de Publicacion: ${this.fecha_de_publicacion}. Genero: ${this.generos}`)
    }
}

let InformacionPersonal = {
    nombre: "Santiago",
    edad: 20,
    direccion: "Benito Diaz de Gamorra",
    correo: "cdmx2162@amerike.edu.mx",
    telefono: "5515964448",
    pasatiempos: ["Tocar Guitarra","Ver peliculas","Salir en bici"],
    libros: [Libro1,Libro2,Libro3],
};

console.log(InformacionPersonal);
Libro1.fichabibliografica();
Libro2.fichabibliografica();
Libro3.fichabibliografica();


