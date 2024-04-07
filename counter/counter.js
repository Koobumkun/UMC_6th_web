const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick=()=>{
    let value = Number(number.textContent);
    console.log(`${increase.id}이 클릭됨`);
    number.textContent = value + 1;
}
decrease.onclick=()=>{
    let value = Number(number.textContent);
    console.log(`${decrease.id}이 클릭됨`);
    number.textContent = value - 1;
}