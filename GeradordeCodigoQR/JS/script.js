const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

/* eventos */
function generatorQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return
    
    qrCodeBtn.innerText = "Gerando código..."
    
    qrCodeImg.src = `https://api.qrserver.com/v1/craete-qr-code/?size=150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerHTML = "Código criado!"
    })
}

qrCode.addEventListener("click", () => {
    generatorQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generatorQrCode()
    }
})

/* limpar área do QR Code */
qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value){
       container.classList.remove("active")
       qrCodeBtn.innerHTML = "Gerar QR Code"
    }
})