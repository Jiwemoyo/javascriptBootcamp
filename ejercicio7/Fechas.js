const fechaHoy = new Date()

console.log(fechaHoy)

const nacimiento = new Date(1994,04,23)

console.log(nacimiento)

const tarde = (fechaHoy>nacimiento)

console.log(tarde)

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth()+1
const anyoNacimiento = nacimiento.getFullYear()

console.log(anyoNacimiento)
