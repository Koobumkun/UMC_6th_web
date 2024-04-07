const Name = document.getElementById("name")
const checkname = document.getElementById("checkname")
const email = document.getElementById("email")
const checkemail = document.getElementById("checkemail")
const age = document.getElementById("age")
const checkage = document.getElementById("checkage")
const password = document.getElementById("password")
const checkpassword = document.getElementById("checkpassword")
const repassword = document.getElementById("repassword")
const checkrepass = document.getElementById("checkrepass");
const submit = document.getElementById("submit");
const modal_login = document.getElementById("login_modal");
const Close = document.getElementById("close");

let collectname = false;
let collectemail = false;
let collectage = false;
let collectpassword = false;
let collectrepass = false;

Name.onchange=()=>{
    if(Name.value === ""){
        checkname.textContent="필수 입력 항목입니다!";
        checkname.style.color = "red";
        checkname.style.display = "flex";
    }
    else{
        checkname.textContent="멋진 이름이네요!";
        checkname.style.color = "green";
        checkname.style.display = "flex";
        collectname = true;
    }
}
email.onchange=()=>{
    let emailValue = email.value;
    console.log(emailValue);
    let regEmail = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
    console.log(regEmail.test(emailValue));
    console.log(regEmail.test(emailValue));
    if(regEmail.test(emailValue) === true){
        checkemail.textContent="올바른 이메일 형식입니다!";
        checkemail.style.color = "green";
        checkemail.style.display = "flex";
        collectemail = true;
    }
    else{
        checkemail.textContent="올바른 이메일 형식이 아닙니다!";
        checkemail.style.color = "red";
        checkemail.style.display = "flex";
    }
}
age.onchange=()=>{
    console.log(age.value);
    let Age = age.value;
    let ageCheck = /^-?[0-9]{0,}.?[0-9]/;
    console.log(ageCheck.test(Age));
    if(ageCheck.test(Age) === true){
        if(Age.includes("-")){
            checkage.textContent="나이는 음수가 될 수 없습니다!";
            checkage.style.color="red";
            checkage.style.display="flex";
        }
        else if(Age.includes(".")){
            checkage.textContent="나이는  소수가 될 수 없습니다!";
            checkage.style.color="red";
            checkage.style.display="flex";
        }
        else{
            Age = parseInt(Age);
            if(Age < 20){
                checkage.textContent="미성년자는 가일할 수 없습니다!";
                checkage.style.color="red";
                checkage.style.display="flex";
            }
            else{
                checkage.textContent="올바른 나이 형식입니다!";
                checkage.style.color="green";
                checkage.style.display="flex";
                collectage=true;
            }
        }
    }
    else{
        checkage.textContent="나이는 숫자 형식이어야 합니다!";
        checkage.style.color="red";
        checkage.style.display="flex";
    }
}
password.onchange=()=>{
    let pass = password.value;
    let len = pass.length;
    let checkPass = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    if(len < 4){
        checkpassword.textContent="비밀번호는 최소 4자리 이상이어야 합니다!";
        checkpassword.style.display="flex";
        checkpassword.style.color="red";
    }
    else if(len > 12){
        checkpassword.textContent="비밀번호는 최대 12자리까지 가능합니다!";
        checkpassword.style.display="flex";
        checkpassword.style.color="red";
    }else if(checkPass.test(pass) === true){
        checkpassword.textContent="올바른 비밀번호입니다!";
        checkpassword.style.display="flex";
        checkpassword.style.color="green";
        collectpassword=true;
    }
    else{
        checkpassword.textContent="숫자와 영어, 특수문자를 모두 포함해야 합니다!";
        checkpassword.style.display="flex";
        checkpassword.style.color="red";
    }
}
repassword.onchange=()=>{
    let repass = repassword.value;
    if(repass === password.value){
        checkrepass.textContent="비밀번호가 일치합니다!";
        checkrepass.style.display="flex";
        checkrepass.style.color="green";
        collectrepass=true;
    }
    else{
        checkrepass.textContent="비밀번호가 일치하지 않습니다!";
        checkrepass.style.display="flex";
        checkrepass.style.color="red";
    }
}
submit.onclick=()=>{
    if(collectname && collectemail && collectage && collectpassword && collectrepass){
        console.log()
        modal_login.style.display = "flex";
    }
    else{
        if(!collectname){
            checkname.textContent="필수 입력 항목입니다!";
            checkname.style.color = "red";
            checkname.style.display = "flex";
        }
        if(!collectemail){
            checkemail.textContent="올바른 이메일 형식이 아닙니다!";
            checkemail.style.color = "red";
            checkemail.style.display = "flex";
        }
        if(!collectage){
            checkage.textContent="나이를 입력해주세요!";
            checkage.style.color = "red";
            checkage.style.display = "flex";
        }
        if(!collectpassword){
            checkpassword.textContent="올바른 비밀번호 형식이 아닙니다!";
            checkpassword.style.color = "red";
            checkpassword.style.display = "flex";
        }
        if(!collectrepass){
            checkrepass.textContent="비밀번호가 일치하지 않습니다!";
            checkrepass.style.color = "red";
            checkrepass.style.display = "flex";
        }
    }
}
Close.onclick=()=>{
    modal_login.style.display = "none";
}