const boton = document.querySelector('button')

boton.addEventListener('click',()=>{
    alert('click en el boton')
})

$(()=>{
    $('button').click(()=>{
        console.log('estoy utilizando Jqueri')
    })
})