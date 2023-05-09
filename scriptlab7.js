function validateForm(){
  var x = document.forms["biuletyn"]["name"].value;
  if (x == "") {
    alert("Jedno pole nie jest usupełnione");
    return false;
  }
}

function validateLength() {
    var a = document.forms["biuletyn"]["password"].value;
    if (a.length < 8) {
        alert("Hasło musi mieć przynajmniej 8 znaków!")
        return false;
    }
}

function validateEmail() {
    var b = document.forms["biuletyn"]["email"].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)) {
        return true;  
    } else {
        alert("Adres Email nie jest poprawny!")
    }
}

function validatePassword() {
    var c = document.forms["biuletyn"]["password"].value;
    var pwsymbols = /^[A-Za-z]\w{7,14}$/;
    if (c.match(pwsymbols)) {
        return true;
    } else {
        alert("Hasło nie jest poprawne. Ono musi mieć od 7 do 16 symbolów, które są literami, numerami lub podkreśleniami. Także pierwszy symbol musze być literką!")
    }
    
}