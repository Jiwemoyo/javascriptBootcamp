const persona ={
    nombre:"Alessandro",
    apellido:"Cisneros",
    edad:28,
    altura:170,
    eresDesarrolador:true
}

const edad = "edad"

const amigo1 ={
    nombre:"Brando",
    apellido:"Bunay",
    edad:29,
    altura:174,
    eresDesarrolador:false
}

const amigo2={
    nombre:"Ana",
    apellido:"Sanhueza",
    edad:25,
    altura:168,
    eresDesarrolador:true
}


const array =[persona,amigo1,amigo2]

const ordenado = array.sort((a,b)=> b.edad-a.edad)

console.log(ordenado)