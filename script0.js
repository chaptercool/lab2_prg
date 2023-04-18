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
// let num1 = parseFloat(prompt("Podaj liczbę 1: "));
// let num2 = parseFloat(prompt("Podaj liczbę 2: "));
// let num3 = parseFloat(prompt("Podaj liczbę 3: "));

// if(num1 == num2 && num2 == num3){
//     console.log("Liczby są równe sami do siebie");
// }
// else{
//     if(num1 >= num2 && num1 >= num3){
//         console.log("Największa liczba to " +num1);
//     }
//     else if(num2 >= num1 && num2 >= num3){
//         console.log("Największa liczba to " +num2);
//     }
//     else if(num3 >= num1 && num3 >= num2){
//         console.log("Największa liczba to " +num3);
//     }
// }

//wersja druga (help przechowywuje tymczasowo największą liczbę)
// if(num1 == num2 && num2 == num3){
//     console.log("Liczby są równe.");
// }
// else{
//     help = num1;
//     if(help <= num2){
//         help = num2;
//     }
//     if(help <= num3){
//         help = num3;
//     }
//     console.log("Największa liczba to: " +help);
// }

/*
z5 algorytm Euklidesa
*/
// function nwd() {
//     var w;
//     while (d) {
//         w = c % d;
//         c = d;
//         d = w;
//     }
//     return c;
// }
// console.log("Największy wspólny dzielnik to: " + nwd(10, 20));

//wersja z formularzami p1
// function nwd(){
//     let a = document.getElementById("n1").value;
//     let b = document.getElementById("n2").value;

//     for(let i = 1; i <= a && i <= b; i++){
//         if(a % i == 0 && b % i == 0){
//             divisor = i;
//         }
//     }
//     document.getElementById("msg").innerHTML = divisor;
// }

/*
z6 studenty
*/
const student1 = {
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 22,
};

const student2 = {
    imie: "Andrzej",
    nazwisko: "Kozioł",
    wiek: 19,
};

const student3 = {
    imie: "Patryk",
    nazwisko: "Mickiewicz",
    wiek: 28,
};

console.log(student1.imie, student1.nazwisko + ", " + student1.wiek)
console.log(student2.imie, student2.nazwisko + ", " + student2.wiek)
console.log(student3.imie, student3.nazwisko + ", " + student3.wiek)

/*
z7 wpisywanie wartościej do obiektów
*/

const student4 = {
    imie: null,
    nazwisko: null,
    wiek: null,
};

const student5 = {
    imie: null,
    nazwisko: null,
    wiek: null,
};

// student4["imie"] = prompt("Podaj imię studenta nr.4");
// student4["nazwisko"] = prompt("Podaj nazwizko studenta nr. 4");
// student4["wiek"] = prompt("Podaj wiek studenta nr. 4");

// student5["imie"] = prompt("Podaj imię studenta nr.5");
// student5["nazwisko"] = prompt("Podaj nazwizko studenta nr. 5");
// student5["wiek"] = prompt("Podaj wiek studenta nr. 5");

// console.log(student4.imie, student5.wiek)

// document.getElementById("st4").innerHTML = "Nowe studenty: 1) " + student4.imie + student4.nazwisko + ", " + student4.wiek;
// document.getElementById("st5").innerHTML = "2) " + student5.imie + student5.nazwisko + ", " + student5.wiek;

/*
z8 zegar
*/