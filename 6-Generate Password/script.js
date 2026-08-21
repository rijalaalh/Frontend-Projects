const copyButton=document.getElementById("copy-button")
const passwordDisplay=document.getElementById("password-display")
const lengthSlider=document.getElementById("length")
const lengthValueSlider=document.getElementById("length-value")
const includeUppercase=document.getElementById("include-uppercase")
const includeLowercase=document.getElementById("include-lowercase")
const includeNumbers=document.getElementById("include-numbers")
const includeSymbols=document.getElementById("include-symbols")
const generateBtn=document.getElementById("generate-button")
const strengthValue=document.getElementById("strength-value")
const imgCopy=document.getElementById("img-copy")

const strengthBar=document.getElementById("strength-bar")
const upperCaseLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lwerCaseletter=upperCaseLetter.toLowerCase()
const symbole="!@#&$^()-_=+[]{}|;:,.<>?"
const numbers="0123456789"
lengthSlider.addEventListener("input",()=>{
    lengthValueSlider.textContent=lengthSlider.value
})
generateBtn.addEventListener("click",generateRandomPass)
// this function create random password with user's option
function generateRandomPass(){
    const length=Number(lengthSlider.value)
    const includeLowercasecheked=includeLowercase.checked
    const includeUppercheked=includeUppercase.checked
    const includeNumberschcked=includeNumbers.checked
    const includesymbolechked=includeSymbols.checked
    console.log(includeSymbols)
    if(!includeLowercasecheked && !includeNumberschcked && !includeUppercheked && !includesymbolechked){
        alert("Please select at leasr one char type.")
        return;
    } 
    const newPassword=createRandomPassword(length,includeLowercasecheked,includeUppercheked,includeNumberschcked,includesymbolechked)
    passwordDisplay.textContent=newPassword
    updateStengMeter(newPassword)

}
function updateStengMeter(password){
    let strengthScore=0;
    const passwordlength=password.length
    const hasUpperCase=/[A-Z]/.test(password)
    const hasLowerCase=/[a-z]/.test(password)
    const hasNumber=/[0-9]/.test(password)
    const hasSymbole=/[!@#&$^()-_=+\[\]{}|;:,.<>?]/.test(password)
    strengthScore=Math.min(passwordlength*2,40)
    
    if(hasLowerCase){
        strengthScore+=15
    }
    if(hasNumber){
        strengthScore+=15

    }
        if(hasUpperCase){
        strengthScore+=15
    }
    if(hasSymbole){
        strengthScore+=15
    }
    if(passwordlength<8){
        strengthScore=Math.min(strengthScore,40)
    }
    const safeScore=Math.max(5,Math.min(100,strengthScore))
    console.log(safeScore)

    strengthBar.style.width=safeScore+"%"
    if(safeScore<40){
        strengthBar.style.backgroundColor="#fc8181"
        strengthValue.textContent="Weak"
        strengthValue.style.fontWeight="normal"
    }else if(safeScore<70){
        strengthBar.style.backgroundColor="#fbd38d"
        strengthValue.textContent="Medium"
        strengthValue.style.fontWeight="500"

        
    }else{
        strengthBar.style.backgroundColor="#68d391"
        strengthValue.textContent="Strong"   
    }
}
function createRandomPassword(length,includelower,includeUpper,includeNumber,includeSymbole){
let allCharcters=""
if(includelower){
    allCharcters+=lwerCaseletter
}
if(includeUpper){
    allCharcters+=upperCaseLetter
}
if(includeNumber){
    allCharcters+=numbers
}
if(includeSymbole){
    allCharcters+=symbole
}
let lengthAllcharacter=allCharcters.length
let newpassword=""
for(let i=0;i<length;i++){
    newpassword+=allCharcters[Math.floor(Math.random()*lengthAllcharacter)]
}
return newpassword
}
copyButton.addEventListener("click",copyPassword)
async function copyPassword(){
    console.log(passwordDisplay.textContent.length)
    if(!passwordDisplay.textContent.length){
        return;
    }
    try{
        navigator.clipboard.writeText(passwordDisplay.textContent)
    }catch(error){
        console.log(error)
    }
    imgCopy.src="./check_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
    setTimeout(()=>{
        imgCopy.src="./content_copy_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
    },500)
}
generateRandomPass()
