function Calculadora(){
  let operador;
  
      while(operador != "salir"){
          operador = prompt("Digite si quiere + - / * ");
          let numero1 = parseInt(prompt("Digite el primer numero"));
          let numero2 = parseInt(prompt("Digite el segundo numero"));
          let suma = numero1 + numero2;
          let resta = numero1 - numero2;
          let multiplicacion = numero1 * numero2;
          let division = numero1 / numero2;
          if (operador === "+"){
              alert(`El resultado es ${suma}`);
          }
          else if (operador === "-"){
              alert(`El resultado es ${resta}`);
          }
          else if (operador === "*"){
              alert(`El resultado es ${multiplicacion}`);
          }
          else if (operador === "/"){
              alert(`El resultado es ${division}`);
          }
          else {
              alert("Debe colocar un signo")
              Calculadora()
          }
      }
  }
  Calculadora()