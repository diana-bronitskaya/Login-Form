const form = document.forms[0];
const blockedEmails = ["admin@example.com", "superuser@example.com", "user@example.com"];
const blockedEmailEerror = document.querySelector("#blockedEmailEerror");

form.addEventListener("submit", function (e) {
    alert("Форма отправлена");
});

form.passwordConfirmInput.addEventListener("input", function () {
    if (form.passwordConfirmInput.value != form.passwordInput.value) {
        form.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
        form.passwordInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    }
    else {
        form.passwordConfirmInput.setCustomValidity("");
        form.passwordInput.setCustomValidity("");
    }
});

form.emailInput.addEventListener("input", function () {
    let email = form.emailInput.value;
    if (blockedEmails.indexOf(email) != -1) {
        blockedEmailEerror.innerHTML = `Email ${email} не может использоваться при регестрации`;
    }
    else {
        blockedEmailEerror.innerHTML = "";
    }
});




