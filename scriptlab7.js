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

// let province = document.querySelector(".hiddendistrict")
// let provinceSelect = document.querySelector('.hiddendistrict.select')


// const checkbox = document.querySelector("[name = 'sameaddress']")
// const contactAddress = document.querySelector(".address2hide")
// checkbox.addEventListener('change', () => {
//     contactAddress.hidden = checkbox.checked;
// })

// function validation() {
//     var x = document.forms["biuletyn"]["name"].value;
//     if (x == "") {
//         document.getElementById("nameerror").innerHTML = "Te pole nie jest uzupełnione!";
//         return false;
//     }

//     var a = document.forms["biuletyn"]["password"].value;
//     if (a.length < 8) {
//         document.getElementById("passworderror").innerHTML = "Hasło musi mieć przynajmniej 8 symbol!";
//         return false;
//     }
    
//     var b = document.forms["biuletyn"]["email"].value;
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)) {
//         return true;
//     } else {
//         document.getElementById("emailerror").innerHTML = "Adres skrzyńki pocztowej nie jest poprawny!";
//     }

//     var c = document.forms["biuletyn"]["password"].value;
//     var pwsymbols = /^[A-Za-z]\w{7,14}$/;
//     if (c.match(pwsymbols)) {
//         return true;
//     } else {
//         document.getElementById("passworderror").innerHTML = "Hasło nie jest poprawne. Ono musi mieć od 7 do 16 symbolów, które są literami, numerami lub podkreśleniami. Także pierwszy symbol musze być literką!";
//     }

//     var d = new Date(document.forms["biuletyn"]["birth"].value);
//     var today = new Date();
//     var age = today.getFullYear() - d.getFullYear();
//     if (age < 18) {
//         alert("Nie jesteś pełnoletnim!");
//     }

//     var e = document.forms["biuletyn"]["password"];
//     var f = document.forms["biuletyn"]["password2"];
//     if (f.match(e)) {
//         return true;
//     } else {
//         alert("Hasło nie jest poprawne!")
//     }
// }

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validForm()) {
    alert("Sukces");
  }
});

// pola
const nameField = document.querySelector("[name='name']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});

const surnameField = document.querySelector("[name='surname']");
surnameField.addEventListener('input', () => {
    requiredValidation(surnameField);
    minLengthValidation(surnameField, 2);
});

const emailField = document.querySelector("[name='email']");
emailField.addEventListener('input', () => {
    requiredValidation(emailField);
    minLengthValidation(emailField, 2);
    emailValidation(emailField);
});

const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener("input", () => {
  requiredValidation(passwordField);
});

const sexFields = document.getElementsByName('sex');
sexFields.forEach(field => {
    field.addEventListener('change', () => {
        validSexFileds()
    });
});

const phoneField = document.querySelector("[name='phone']");
phoneField.addEventListener('input', () => {
    requiredValidation(phoneField);
    minLengthValidation(phoneField, 9);
    maxLengthValidation(phoneField, 9);
});

const birthDateField = document.querySelector("[name='date']");
birthDateField.addEventListener('input', () => {
    requiredValidation(birthDateField);
    validAge();
});

const confirmPasswordField = document.querySelector("[name='password2']");
confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword();
});

//województwa
const countyField = document.querySelector("[name='country']");
let provinceField = document.querySelector("[name='district']");
const province = document.querySelector('.district');
const provinceSelect = document.querySelector('.district.select');
countyField.addEventListener('change', () => {
    const result = requiredValidation(countyField);

    if (countyField.value === "Polska") {
        province.hidden = true;
        provinceSelect.hidden = false;
        provinceField = document.querySelector(".district.select [name='district']");

        provinceField.removeEventListener('input', provinceField);
        provinceField.addEventListener('change', () => {
            validProvince();
        });
    }
    else {
        province.hidden = false;
        provinceSelect.hidden = true;

        provinceField = document.querySelector("[name=district']");

        provinceField.removeEventListener('change', provinceField);
        provinceField.addEventListener('input', () => {
            validProvince();
        });
    }

    provinceField.disabled = result;
});

function validProvince() {
  const result = requiredValidation(provinceField);
  addressField.disabled = result;
  contactAddressField.disabled = result;
}

//adres ogólny
const addressField = document.querySelector("[name='address']");
const contactAddressField = document.querySelector("[name='contactAddress']");

addressField.addEventListener("input", () => {
  requiredValidation(addressField);
  minLengthValidation(addressField, 3);
});
contactAddressField.addEventListener("input", () => {
  requiredValidation(contactAddressField);
  minLengthValidation(contactAddressField, 3);
});

//korespondencja
const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");

checkboxField.addEventListener("change", () => {
  contactAddress.hidden = checkboxField.checked;
});

//walidacja

//błąd walidacji
function requiredValidation(field) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
    );

  if (!field.value || field.value === "") {
    errorField.innerHTML = "To pole jest wymagane";
    return true;
  } else {
    // errorField.innerHTML = null;
    return false;
  }
}

//długość min
function minLengthValidation(field, minLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
    );

  if (field.value.length < minLength) {
    errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
    return true;
  } else {
    // errorField.innerHTML = "";
    return false;
  }
}

//długość max
function maxLengthValidation(field, maxLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
    );

  if (field.value.length > maxLength) {
    errorField.innerHTML = `To pole może mieć najwyżej ${maxLength} znaków`;
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

//płeć
function validSexFileds() {
  let result = false;

  const errorField = document.querySelector("span.gendererror");

  sexFields.forEach((field) => {
    result = field.checked || result;
  });

  errorField.innerHTML = result ? "" : "Prosze wybrać płeć";

  return !result;
}

//poczta
function emailValidation(field) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
    );
    
  if (!emailRegex.test(field.value)) {
    errorField.innerHTML = "Proszę podać poprawny adres e-mail.";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

//hasło
function validatePassword() {
    var c = document.forms["biuletyn"]["password"].value;
    var pwsymbols = /^[A-Za-z]\w{7,14}$/;
    if (c.match(pwsymbols)) {
        return true;
    } else {
        document.getElementById("passworderror").innerHTML = "Hasło musi zawierać od 7 do 16 symbol, liczby, przynajmniej jedną literke oraz specjalne symbole (@ lub _)."
    }
}

//powtórzanie hasła
function validConfirmPassword() {
  const errorField = document.querySelector(
    `[name='password2'] + span.error`
  );
  if (confirmPasswordField.value !== passwordField.value) {
    errorField.innerHTML = "Hasła nie są takie same";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

//konieczna walidacja
function validForm() {
  if (
    requiredValidation(nameField) ||
    requiredValidation(surnameField) ||
    requiredValidation(emailField) ||
    requiredValidation(passwordField) ||
    validSexFileds() ||
    requiredValidation(phoneField) ||
    requiredValidation(provinceField) ||
    requiredValidation(birthDateField) ||
    requiredValidation(countyField) ||
    minLengthValidation(nameField, 2) ||
    minLengthValidation(surnameField, 2) ||
    minLengthValidation(emailField, 2) ||
    minLengthValidation(passwordField, 8) ||
    minLengthValidation(nameField, 2) ||
    minLengthValidation(phoneField, 9) ||
    maxLengthValidation(phoneField, 9) ||
    emailValidation(emailField) ||
    validatePassword(passwordField) ||
    validAge() ||
    validConfirmPassword() ||
    requiredValidation(addressField) ||
    minLengthValidation(addressField, 3) ||
    (!checkboxField.checked &&
      (requiredValidation(contactAddressField) ||
        minLengthValidation(contactAddressField, 3)))
  ) {
    return false;
  }

  return true;
}