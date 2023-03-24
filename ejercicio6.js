const listaCompras =['arroz','aceite','especias','jabon','carne','te']
listaCompras.push('Aceite de girasol')
listaCompras.pop()

const peliculasFav =[
    {titulo:'Avatar',director:'James Cameron',fecha:'2009'},
    {titulo:'MarioBros',director:' Michael Jelenic',fecha:'2023'},
    {titulo:'Real Steel',director:'Shawn Levy',fecha:'2011'}
]

const peliinf=peliculasFav.filter(element =>  element.fecha < 2010);
const directores = peliculasFav.map(element => element.director)
const titulos = peliculasFav.map(element => element.titulo)
const direcTitulo = directores.concat(titulos)
const direcTitulo2 = [...directores,...titulos]

console.log(direcTitulo2)