let nombre="Alessandro"
let apellido ="Cisneros"
let completo={name:nombre,lname:apellido}

sessionStorage.setItem("session",JSON.stringify(completo))
localStorage.setItem("local",JSON.stringify(completo))

const expiracion = new Date(Date.now() + 120000).toUTCString();
document.cookie = 'nombreCookie=AlessandroCookie; expires=' + expiracion;
