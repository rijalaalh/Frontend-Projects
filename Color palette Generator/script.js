const generateBtn=document.getElementById("generate-btn")
const platteConteiner=document.querySelector(".palette-container")


generateBtn.addEventListener("click",generatePaltte)
function generatePaltte(){
    const colors=[]
    for(let i=0;i<5;i++){
        colors.push(generateRandomColor())
    }
    updatePaletteDisplay(colors)
}
function updatePaletteDisplay(colors){
    const colorBoxes=document.querySelectorAll(".color-box")
    colorBoxes.forEach((box,index)=>{
        const color=colors[index]
        const colorDiv=box.querySelector(".color")
        const hexValue=box.querySelector(".hex-value")
        colorDiv.style.backgroundColor=color
        hexValue.textContent=color
    })
}
function generateRandomColor(){
    const letters="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        
        color+=letters[Math.floor(Math.random()*letters.length)]
    }
    return color
}
generatePaltte()
platteConteiner.addEventListener("click",(e)=>{
  const copyBtn = e.target.closest('.copy-btn');
  if (copyBtn) {
    
    let hexValues = copyBtn.previousElementSibling.textContent;
    navigator.clipboard.writeText(hexValues).then(() => {
      showCopySucces(copyBtn);
    }).catch((err) => console.log(err));
  }else if(e.target.classList.contains("color")){
    let hexValues = e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard.writeText(hexValues).then(() => {
    }).catch((err) => console.log(err));
  }
})
function showCopySucces(btn) {
  const checkIcon = btn.nextElementSibling;
  btn.style.display = "none";
  checkIcon.style.display = "inline-block";
  checkIcon.style.color = "#48bb78";

  setTimeout(() => {
    checkIcon.style.display = "none";
    btn.style.display = "inline-block";
  }, 1500);
}