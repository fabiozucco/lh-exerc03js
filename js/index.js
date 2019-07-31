var reais = parseInt(prompt("Digite o valor em reais, sem centavos"));
var value1 = 0;
var value = 0;
var count = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;

if(reais >= 100) {
	value = (reais - 100)
	if (value === 0){
	count += 1;
//	document.body.append(count + " nota de R$ 100,00")
	}else if (value > 0){
	value = (reais/100)
//	document.body.append(value + "  notas de R$ 100,00")
	}
}

if(reais < 100) {
	value = (reais - 50)
	if (value === 0)
	count += 1;
//	document.body.append(count + " nota de R$ 100,00")
	if (value < 50 && value > 20){
	value1 = (value-20)
	count1 += 1;
	if (value1 > 20)
	value2 = (value1-20)
	count1 += count1;
	if (value2 > 5)
	value3 = (value2-5)
	if (value3 > 5)
	value4 = (value3-5)
	}
}

document.body.append(value)
document.body.append(value1)
document.body.append(value2)
document.body.append(value3)
document.body.append(value4)

