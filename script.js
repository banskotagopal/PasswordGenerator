let range = document.getElementById("range")
let passwordLength = document.getElementById("passwordLength")
let text = document.getElementById('text')
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789"
let symbols = `!@#$%^&*()_+-={}[]|\:;"'<>,.?/~`;
let generatedBtn = document.getElementById("generated")
let upperCheck = document.getElementById("upperCheck")
let lowerCheck = document.getElementById("lowerCheck")
let numberCheck = document.getElementById("numberCheck")
let symbolCheck = document.getElementById("symbolCheck")

range.addEventListener('click', () => {
    let value = range.value
    passwordLength.textContent = value
})

generatedBtn.addEventListener('click', generatedPassword)

function generatedPassword() {
    let passArray = ""
    if (upperCheck.checked) {
        passArray += upperCase
    }
    if (lowerCheck.checked) {
        passArray += lowerCase
    }
    if (numberCheck.checked) {
        passArray += numbers
    }
    if (symbolCheck.checked) {
        passArray += symbols
    }
    if (passArray === "") {
        alert("Please select one type to generated password :")
        return
    }
    password(passArray)
}

function password(passArray) {
    let totalLenPass = Number(range.value)
    let finalPassword = '';
    for (let i = 0; i < totalLenPass; i++) {
        let random = Math.floor(Math.random() * passArray.length)
        finalPassword += passArray[random]
    }
    text.value = finalPassword
}

generatedPassword()

let copyBtn = document.getElementById("copyBtn")

copyBtn.addEventListener('click',() =>{
    if(!text.value) return

    navigator.clipboard
    .writeText(text.value)
    .then(() => showCopy())
    .catch((error) => console.log("Due to error",error))
})

let copyed = document.getElementById("showCopy")
let copy = document.getElementById("copyBtn")

function showCopy()
{
   copy.remove()
   copyed.style.display = "block"
}