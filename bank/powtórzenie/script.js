const form = document.querySelector("#form1");
const inputName = form.querySelector("input[name=name]");
const inputSurname = form.querySelector("input[name=surname]");
const inputNickname = form.querySelector("input[name=nickname]");
const inputPassword = form.querySelector("input[name=password]");
const inputPasswordMatch = form.querySelector("input[name=repeatPassword]");
const formMessage = form.querySelector(".form-message");

var userdata = {
  name: 0,
  surname: 0,
  nickname: 0,
  password: 0
};

form.addEventListener("submit", e => {
  e.preventDefault();

  let formErrorList = [];

  //poszczególne pola
  if (inputName.value.length <= 3) {
    formErrorList.push("Pole imię ma 3 lub mniej znaków");
  }

  if (inputSurname.value.length <= 3) {
    formErrorList.push("Pole nazwisko ma 3 lub mniej znaków");
  }

  const regnicknamesymbols = /^[^0-9][^@#]+$/;
  if (!regnicknamesymbols.test(inputNickname.value)) {
    formErrorList.push("Pole nickname ma 9 lub więcej znaków lub ma specjalne symbole (n.p. @#)");
  }

  const regpwsymbols = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  if (!regpwsymbols.test(inputPassword.value)) {
    formErrorList.push("Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character");
  }

  if (!inputPassword.value.match(inputPasswordMatch.value)) {
    formErrorList.push("Hasło nie zgadza się powtornie")
  }

  //nie ma błędów
  if (!formErrorList.length) {
    userdata.name = inputName.value;
    userdata.surname = inputSurname.value;
    userdata.nickname = inputNickname.value;
    userdata.password = inputPassword.value;
    console.log(userdata);
    e.target.submit();
    location.href = "/bank/powtórzenie/success.html";
  } else {
    formMessage.innerHTML = `
      <h3 class="form-error-title">Przed wysłaniem proszę poprawić błędy:</h3>
      <ul class="form-error-list">
        ${formErrorList.map((el) => `<li>${el}</li>`).join("")}
      </ul>
    `;
  }
})

