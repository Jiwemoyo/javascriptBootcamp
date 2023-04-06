function verdadera() {
    return true
}

async function holaPromesa() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
  }
  
  holaPromesa();


  function* pares() {
    let index = 0;
    while (true) {
      yield index;
      index += 2;
    }
  }


const generador = pares();
console.log(generador.next().value); // 0
console.log(generador.next().value); // 2
console.log(generador.next().value); // 4
console.log(generador.next().value); // 6
console.log(generador.next().value); // 8


