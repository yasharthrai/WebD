const charVal = document.getElementById("textarea")
let totalCount = document.getElementById("total-counter")
let remainingCount = document.getElementById("remaining-counter")

let char = 0

const updateCounter = () => {
    userChar = charVal.value.length;

    totalCount.innerHTML = userChar

    remainingCount.innerHTML = 150 - userChar
}

charVal.addEventListener("keyup", () => updateCounter())


//COPY THE TEXT
const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 99999);// for mobile devices
    navigator.clipboard.writeText(charVal.value);//important
}
