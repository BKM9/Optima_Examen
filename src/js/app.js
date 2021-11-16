"use strict"

var button = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');

function fibonacci(num){
	if(num == 0){
		return 0;
	}else if(num==1){
		return 1;
	}else{
		return fibonacci(num-1)+fibonacci(num-2);
	}
}

button.addEventListener('click',function(){
    var VALOR = document.getElementById("txtValor").value;
    var respueta = fibonacci(VALOR);

	var aux = 1, fib = 0;

	if(VALOR > 0) {
		for(let i = 1; i <= VALOR; i++) {

			let datos = document.createElement("h2");
			datos.innerHTML = `[ ${fib} ]`;
			contenedor.appendChild(datos);
			console.log(`[ ${fib} ]`);
		  	aux += fib;
		  	fib = aux - fib;
		}
	  } else {
		alert(`TIENE QUE SER MAYOR A 0`);
	  }
})
