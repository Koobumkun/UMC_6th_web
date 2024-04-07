const Open = document.getElementById("open");
const Close = document.getElementById("close");
const Modal = document.getElementById("modal")

Open.onclick=()=>{
    Modal.style.display = "flex";
}
Close.onclick=()=>{
    Modal.style.display = "none";
}