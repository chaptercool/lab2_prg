/*
z1 kalculator
*/

var a = 20;
var b = 10;

var add = a + b;
var sub = a - b;
var mul = a * b;
var div = a / b;
var mod  = a % b;

// a)
console.log(add);
console.log("Wynik to: " + sub);

// b)
document.getElementById("addR").innerHTML = add;

document.getElementById("subR").innerHTML = "Wynik odejmowania " +a+ " i " +b+ " to: " +sub;

document.getElementById("mulR").innerHTML = "Wynik mnożenia " +a+ " i " +b+ " to: " +mul;

document.getElementById("divR").innerHTML = "Wynik podzielenia " +a+ " i " +b+ " to: " +div;

document.getElementById("modR").innerHTML = "Wynik modulo " +a+ " i " +b+ " to: " +mod;

/* 
z2 pole trójkąta
*/

let s1 = 6;
let s2 = 8;
let s3 = 10;

let p = (s1 + s2 + s3) / 2;
let area = Math.sqrt(p * ( p - s1) * (p - s2) * (p - s3));
// a)
console.log(area);
// b)
document.getElementById("trk").innerHTML = "Dla trójkąta o bokach " +s1+ ", " +s2+ " i " +s3+ " pole wynosi " +area;

/*
z3 losowy generator
*/

// let gnum = Math.ceil(Math.random() * 10);
// console.log(gnum);
// let num = prompt("Podaj liczbę: ");

// if(gnum == num){
//    //instrukcja tu
//    console.log("Dobra robota! :)");
// }
// else{
//     console.log("Spróbuj ponownie :(");
// }

/*
z4 największa liczba
*/
let num1 = parseFloat(prompt("Podaj liczbę 1: "));
let num2 = parseFloat(prompt("Podaj liczbę 2: "));
let num3 = parseFloat(prompt("Podaj liczbę 3: "));

if(num1 == num2 && num2 == num3){
    console.log("Liczby są równe sami do siebie");
}
else{
    if(num1 >= num2 && num1 >= num3){
        console.log("Największa liczba to " +num1);
    }
    else if(num2 >= num1 && num2 >= num3){
        console.log("Największa liczba to " +num2);
    }
    else if(num3 >= num1 && num3 >= num2){
        console.log("Największa liczba to " +num3);
    }
}
