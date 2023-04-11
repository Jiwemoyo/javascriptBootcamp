function generarFibonacci(num) {
    let resultado = [];
    
    // Casos base
    if (num === 1) {
      resultado = [1];
    } else if (num === 2) {
      resultado = [1, 1];
    } else {
      resultado = [1, 1];
      for (let i = 2; i < num; i++) {
        resultado.push(resultado[i - 1] + resultado[i - 2]);
      }
    }
    
    return resultado;
  }
  
  const num = 6;
  const resultado = generarFibonacci(num);
  console.log(resultado);