/*const btnEle =document.querySelector(".btn")
const imgEle =document.getElementById("QR-img")
const boxEle = document.getElementById("image-box")

btnEle.addEventListener("click", ()=>{
    imgEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`

    boxEle.classList.add("show-img")
})*/
document.querySelector(".btn").onclick = () => {
  document.getElementById("QR-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
  document.getElementById("image-box").classList.add("show-img");
};
