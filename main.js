// 1
let text = "ddd@bbb@ccc";
document.write(text.replaceAll("@", "!") + "<br>");

// 2 
let JS = 'js';
document.write(JS.toUpperCase() + "<br>");

// 3 
let js = "JS";
document.write(js.toLowerCase() + "<br>");

// 4 
let someText = 'I am a hero!'.length;
console.log(someText);

// 5 
let creditCard = prompt("введите номер кредитной карты");
let creditNumber = "*".repeat(creditCard.length - 4);
let result = creditNumber + creditCard.slice(creditCard.length - 4, creditCard.length);

document.write(`Номер вашей кредитной карты: ${result}`);