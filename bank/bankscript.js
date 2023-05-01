var user1string = `{
    "name": ["Karolina", "Lechowicz"],
    "ident": 0,
    "money": 0,
    "pin": 1234
}`

var user2string = `{
    "name": ["Piotr", "Bąk"],
    "ident": 1,
    "money": 0,
    "pin": 5678
}`

var user3string = `{
    "name": ["Karen", "Milewicz"],
    "ident": 2,
    "money": 0,
    "pin": 9012
}`

var user4string = `{
    "name": ["Pawlo", "Kowalski"],
    "ident": 3,
    "money": 0,
    "pin": 3456
}`

function login() {
    var user1 = JSON.parse(user1string);
    var user2 = JSON.parse(user2string);
    var user3 = JSON.parse(user3string);
    var user4 = JSON.parse(user4string);
    if (document.getElementById(imie) == user1.ident && document.getElementById(pw) == user1.pin) {
        window.location.href = ("/bank/bank_manage.html")
    } else if (document.getElementById(imie) == user2.ident && document.getElementById(pw) == user2.pin) {
        window.location.href = ("/bank/bank_manage.html")
    } else if (document.getElementById(imie) == user3.ident && document.getElementById(pw) == user3.pin) {
        window.location.href = ("/bank/bank_manage.html")
    } else if (document.getElementById(imie) == user4.ident && document.getElementById(pw) == user4.pin) {
        window.location.href = ("/bank/bank_manage.html")
    } else {
        alert("Wystąpił błąd pod czas logowania. Możliwo, że takiego konta nie istnie lub niektóre dane nie są poprawne.")
    }
}