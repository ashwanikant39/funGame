let nobtn = document.querySelector("#noBtn");
let btnParent = document.querySelector(".btnParent");
let yesBtn=document.querySelector("#yesBtn");
let container= document.querySelector("#container");
let result= document.querySelector("#resultContainer");


yesBtn.addEventListener("click", ()=>{
    container.hidden=true;
    result.hidden=false;
} )

nobtn.addEventListener("mouseover", () => {
  btnParent.classList.toggle("btnParentReverse");
});
