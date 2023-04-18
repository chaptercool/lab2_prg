// rozgrzewka
// nowy rok
function doSetTimeout(i){
    setTimeout(function(){
        if (i === 10){
            document.getElementById("nowyrok").innerHTML = "Szczęśliwego nowego roku!";
        } else{
            console.log(i);
            document.getElementById("nowyrok").innerHTML = 10 - i;
        }
    }, i * 1000);
}

for(let i = 10; i >= 0; i--){
    doSetTimeout(i);
}

// zadanie 1 tabliczka mnożenia
function TabMnoz(){
    var table = document.getElementById("tablmnoz");
    table.innerHTML = "";
    for (var i = 1; i <= 10; i++){
        var wiersz = document.createElement("tr");
        for (var j = 1; j <= 10; j++){
            var komorka = document.createElement("td");
            komorka.textContent = i * j;
            wiersz.appendChild(komorka);
        }
        table.appendChild(wiersz);
    }
}

// zadanie 2 dane osobowe
var m_imiona = ["Jan", "Mateusz", "Jakub", "Rafał", "Jarosław", "Damian"]
var m_nazwiska = ["Mickiewicz", "Sikorski", "Mikołajczyk", "Ciepliński", "Kopisto", "Rejtan"]
var k_imiona = ["Beata", "Grażyna", "Ewelina", "Barbara", "Joanna", "Irena"]
var k_nazwiska = ["Lubelska", "Kowalska", "Bryk", "Kamilska", "Kaszałowicz", "Fryc"]

function los_czl(){
    var imie, nazwisko;
    var plec = Math.floor(Math.random() * 2);
    if (plec == 0){
        imie = m_imiona[Math.floor(Math.random() * m_imiona.length)];
        nazwisko = m_nazwiska[Math.floor(Math.random() * m_nazwiska.length)];
    } else {
        imie = k_imiona[Math.floor(Math.random() * k_imiona.length)];
        nazwisko = k_nazwiska[Math.floor(Math.random() * k_nazwiska.length)];
    }
    var numer = Math.floor(Math.random() * 30000001) + 5000000;
    var wiek = Math.floor(Math.random() * 62) + 18;
    return { imie: imie, nazwisko: nazwisko, wiek: wiek, telefon: numer };
}

function rekord() {
    var ilosc = parseInt(document.getElementById("ilosc").value);
    var tabelka = document.getElementById("tabelka");
    tabelka.innerHTML = "";
    for (var i = 0; i < ilosc; i++){
        var row = tabelka.insertRow(i);

        var imieCell = row.insertCell(0);
        var nazwiskoCell = row.insertCell(1);
        var wiekCell = row.insertCell(2);
        var telefonCell = row.insertCell(3);

        var data = los_czl();

        imieCell.innerHTML = data.imie;
        nazwiskoCell.innerHTML = data.nazwisko;
        wiekCell.innerHTML = data.wiek;
        telefonCell.innerHTML = data.telefon;
    }
}