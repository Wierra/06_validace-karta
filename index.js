console.log(validator.isEmail("juracakova.vera@seznam.cz"))
console.log(validator.isCreditCard("4125010001000208", "['mastercard','visa]"))

const email = prompt("Zadej svou e-mailovou adresu:")
const message = document.querySelector("#msg")

if(validator.isEmail(email)) {
    message.textContent = "Email je v pořádku.";
    message.classList.add("msg--valid")
    console.log("ok");
} else {
    message.textContent = "Neplatný email.";
    message.classList.add("msg--invalid")
}