var reais = parseInt(prompt("Digite o valor em reais, sem centavos"));
var count100 = 0;
var count50 = 0;
var count20 = 0;
var count10 = 0;
var count5 = 0;
var count1 = 0;
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")
var p4 = document.createElement("p")
var p5 = document.createElement("p")
var p6 = document.createElement("p")

if (reais != 0){
if (reais >= 100) {
	while (reais >= 100) {
		count100 += 1;
		reais -= 100
	}if (count100 === 1) {
		p1.append(count100 + " nota(s) de R$ 100,00")
		document.body.appendChild(p1)
	}	
}

if(reais < 100 && reais >= 50) {
	if ((reais/50) >= 1){
		count50 += 1;
		reais -= 50
		p2.append(count50 + " nota(s) de R$ 50,00")
		document.body.appendChild(p2)
		}	
}			

if (reais >= 20 && reais < 50) {
		while ((reais/20) >= 1) {
			count20 += 1;
			reais -= 20
		}if (count20 >= 1) {
			p3.append(count20 + " nota(s) de R$ 20,00")
			document.body.appendChild(p3)
		}
}	

if (reais >= 10 && reais < 20 ) {
		while ((reais/10) >= 1) {
			count10 += 1;
			reais -= 10
		}if (count10 >= 1) {
			p4.append(count10 + " nota(s) de R$ 10,00")
			document.body.appendChild(p4)
		}
}

if (reais >= 5 && reais < 10) {
		while ((reais/5) >= 1) {
			count5 += 1;
			reais -= 5
		}if (count5 >= 1) {
			p5.append(count5 + " nota(s) de R$ 5,00")
			document.body.appendChild(p5)
		}
}

if (reais >= 1 && reais < 5) {
		while ((reais/1) >= 1) {
			count1 += 1;
			reais -= 1
		}if (count1 >= 1) {
			p6.append(count1 + " nota(s) de R$ 1,00")
			document.body.appendChild(p6)
		}
}
}else {
	document.body.append("Nenhum valor declarado!")
}