// function validateForm(){
//   var x = document.forms["biuletyn"]["name"].value;
//   if (x == "") {
//     alert("Jedno pole nie jest usupełnione");
//     return false;
//   }
// }

// function validateLength() {
//     var a = document.forms["biuletyn"]["password"].value;
//     if (a.length < 8) {
//         alert("Hasło musi mieć przynajmniej 8 znaków!")
//         return false;
//     }
// }

// function validateEmail() {
//     var b = document.forms["biuletyn"]["email"].value;
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)) {
//         return true;  
//     } else {
//         alert("Adres Email nie jest poprawny!")
//     }
// }

// function validatePassword() {
//     var c = document.forms["biuletyn"]["password"].value;
//     var pwsymbols = /^[A-Za-z]\w{7,14}$/;
//     if (c.match(pwsymbols)) {
//         return true;
//     } else {
//         alert("Hasło nie jest poprawne. Ono musi mieć od 7 do 16 symbolów, które są literami, numerami lub podkreśleniami. Także pierwszy symbol musze być literką!")
//     }
    
// }

function validation() {
    var x = document.forms["biuletyn"]["name"].value;
    if (x == "") {
        document.getElementById("nameerror").innerHTML = "Te pole nie jest uzupełnione!";
        return false;
    }

    var a = document.forms["biuletyn"]["password"].value;
    if (a.length < 8) {
        document.getElementById("passworderror").innerHTML = "Hasło musi mieć przynajmniej 8 symbol!";
        return false;
    }
    
    var b = document.forms["biuletyn"]["email"].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)) {
        return true;
    } else {
        document.getElementById("emailerror").innerHTML = "Adres skrzyńki pocztowej nie jest poprawny!";
    }

    var c = document.forms["biuletyn"]["password"].value;
    var pwsymbols = /^[A-Za-z]\w{7,14}$/;
    if (c.match(pwsymbols)) {
        return true;
    } else {
        document.getElementById("passworderror").innerHTML = "Hasło nie jest poprawne. Ono musi mieć od 7 do 16 symbolów, które są literami, numerami lub podkreśleniami. Także pierwszy symbol musze być literką!";
    }

    var d = new Date(document.forms["biuletyn"]["birth"].value);
    var today = new Date();
    var age = today.getFullYear() - d.getFullYear();
    if (age < 18) {
        alert("Nie jesteś pełnoletnim!");
    }

    var e = document.forms["biuletyn"]["password"];
    var f = document.forms["biuletyn"]["password2"];
    if (f.match(e)) {
        return true;
    } else {
        alert("Hasło nie jest poprawne!")
    }
}