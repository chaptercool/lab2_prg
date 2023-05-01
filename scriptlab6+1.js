// zadanie 1
const tablicaliczb = [];

const min = 1;
const max = 20;

for (i = 1; i < 10; i++) {
    tablicaliczb.push(Math.floor(Math.random() * (max - min + 1) + min));
}

console.log(tablicaliczb + " Niezedytowana wygenerowana tablica");

const suma = tablicaliczb.reduce((a, b) => a + b, 0);
console.log("Suma liczb z tablicy wynosi " + suma);

const parzyste = tablicaliczb.filter(element => element % 2 === 0);
console.log("Następujące liczby są parzyste: " + parzyste);

const mnozenienatrzy = tablicaliczb.map(element => element * 3);
console.log("Następujące liczby zostali pomnożone przez trzy: " + mnozenienatrzy)

znumerem = tablicaliczb;
znumerem.push(68141);
console.log("Tablica zawierająca numer albumu " + znumerem);
for (i = 0; i < znumerem.length; i++){
    if (znumerem[i] === 68141) {
        console.log(znumerem[i] + " znajduje się na pozycji " + i);
    } else {
        continue;
    }
}

tablicaliczb.pop(); //usuwanie numeru albumu

sr_aryt = suma / (tablicaliczb.length + 1);
console.log("Średnia arytmetyczna tablicy wynosi " + sr_aryt.toFixed(2));

function najwiekszaliczba(tablica) {
    let max = tablica[0];
    for (i = 1; i < tablica.length; i++){
        if (tablica[i] > max) {
            max = tablica[i]
        }
    }
    return max;
}
console.log("Największa liczba w tablice to " + najwiekszaliczba(tablicaliczb));

wystliczba = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Wyszukiwana wartość to " + wystliczba);
licznik = 0;
for (i = 0; i < tablicaliczb.length; i++){
    if (tablicaliczb[i] === wystliczba) {
        licznik++;
    } else {
        continue;
    }
}
console.log("Liczba " + wystliczba + " występuje " + licznik + " razy w liscie.");

// zadanie 2
fibL = [];
for (i = 0; i < 100; i++){
    if (i === 0) {
        fibL.push(i);
    } else if (i === 1) {
        fibL.push(i);
    } else {
        fibL.push(fibL[i - 1] + fibL[i - 2])
    }
}
console.log("Ciąg Fibonacciego składający się ze 100 elementów: " + fibL)