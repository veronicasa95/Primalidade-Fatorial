function calcularPrimo(){
	var n = document.getElementById("numero").value
	var primo = "Este número é primo"
	n = parseInt(n)
	console.log(n)
	for(var i=2; i<n; i++){
		if (n% i ==0){
			primo = "Este número não é primo"
			break;
		}
		
	}
	document.getElementById("resultado").innerHTML = primo
}
function calcularFatorial(){
	var n = document.getElementById("numero2").value
	n = parseInt(n)
	valor = 0
	var calculo = 1
	for(var i=n; i> 1; i--){
		calculo = calculo * i
	}
	document.getElementById("resultado2").innerHTML = calculo
}
