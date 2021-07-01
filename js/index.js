var travelLenght = parseInt(prompt("Quanti Km si vuole percorrere?"));
var travellerAge = parseInt(prompt("Quanti anni ha il viaggiatore?"));
var travelPrice = travelLenght * 0.21;
var travelPricePlaceHolder = document.getElementById("travelPrice")
console.log(travelLenght);
console.log(travellerAge);
console.log(travelPrice);
console.log(travelPricePlaceHolder);

if (travellerAge < 18) {
    travelPrice = travelPrice * 0.8;
} else if (travellerAge > 65) {
    travelPrice = travelPrice * 0.6;
}

travelPrice = travelPrice.toFixed(2);
console.log(travelPrice);

travelPricePlaceHolder.innerHTML = travelPrice + '€';