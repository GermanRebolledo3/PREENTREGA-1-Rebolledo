//function Calculadora(){
    //let operador;
    
        //while(operador != "salir"){
          //  operador = prompt("Digite si quiere + - / *");
           // if(operador != "+" && operador != "-" && operador != "*" && operador != "/") {
              //  alert("Debe colocar un signo")
               // Calculadora()
           // }
           // let numero1 = parseInt(prompt("Digite el primer numero"));
           // let numero2 = parseInt(prompt("Digite el segundo numero"));
           // let suma = numero1 + numero2;
           // //let resta = numero1 - numero2;
           // let multiplicacion = numero1 * numero2;
           // let division = numero1 / numero2;
           // if (operador === "+"){
           //     alert(`El resultado es ${suma}`);
           // }
           // else if (operador === "-"){
            //    alert(`El resultado es ${resta}`);
            //}
            //else if (operador === "*"){
            //    alert(`El resultado es ${multiplicacion}`);
           // }
            //else if (operador === "/"){
            //    alert(`El resultado es ${division}`);
           // }
   //}
    //}
    //Calculadora()

   
    let lista_alumnos = [];

    let entrada = parseInt(prompt("Escriba el numero para seleccionar la opcion: \n 1. Ver la lista de alumnos \n 2. Agregar un alumno a la lista \n 3. Buscar a un alumno de la lista \n 4. Eliminar a todos los alumnos cargados \n 0. Salir"))
    
    while(entrada != 0){
        switch(entrada){
            case 1:
                if (lista_alumnos.length <= 0){
                    alert("No hay alumnos cargados")
                }
                else if (lista_alumnos.length > 0){
                    alert("Los alumnos son:" + " " +lista_alumnos)
                }
                break;
            case 2:
                let alumno = prompt("agregar un alumno");
                lista_alumnos.push(alumno);
                break;
            case 3:
                let buscar = prompt("Busca a un alumno");
                let encontrar = lista_alumnos.filter(item => item.includes(buscar))
                let siexiste = lista_alumnos.some(item => item.includes(buscar))
                if(siexiste === true){
                    alert("alumno encontrado:" + " " + encontrar)
                }
                else if(siexiste === false) {
                    alert("Alumno no encontrado");
                }
                break;
            case 4:
                lista_alumnos.length = 0;
                break;
            default:
                alert("Seleccion erronea");
                break;
        }
        entrada = parseInt(prompt("Escriba el numero para seleccionar la opcion: \n 1. Ver la lista de alumnos \n 2. Agregar un alumno a la lista \n 3. Buscar a un alumno de la lista \n 4. Eliminar a todos los alumnos cargados \n 0. Salir"))
    }