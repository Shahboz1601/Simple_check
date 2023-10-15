const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
let calcContain = document.getElementById("dom1");
//Qiymatlar uchun o'zgaruvchilar
let h;
let fik;
let q;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

        if (username > 14 && username < 30) {
            let text1 = document.createElement("h5");
            text1.className = "texts"
            text1.innerText = "Quyidagilardan birini tanlang"
            calcContain.appendChild(text1);

            let text5 = document.createElement("h5");
            text5.className = "texts"
            text5.innerText = "Turbinaga mos keluvchi F.I.K:"
            calcContain.appendChild(text5);
        
            let btn1 = document.createElement("button");
            btn1.className="digit"
            btn1.innerText = "0.88";
            btn1.addEventListener('click',function click() {
                //hammasiga shunday quyib chiqish
                h = username;
                sum(0.88,username);
            });
            calcContain.appendChild(btn1);
        
            let btn2 = document.createElement("button");
            btn2.className="digit"
            btn2.innerText = "0.89";
            btn2.addEventListener('click',function click() {
                h = username;
                sum(0.89,username);
            });
            calcContain.appendChild(btn2);
        
            let btn3 = document.createElement("button");
            btn3.className="digit"
            btn3.innerText = "0.9"
            btn3.addEventListener('click',function click() {
                h = username;
                sum(0.9,username);
            });
            calcContain.appendChild(btn3);
            // location.reload();
        } 
    
        if (username < 15 && username > 0 ){
            let text2 = document.createElement("h5");
            text2.className = "texts"
            text2.innerText = "Quyidagilardan birini tanlang"
            calcContain.appendChild(text2);

            let text6 = document.createElement("h5");
            text6.className = "texts"
            text6.innerText = "Turbinaga mos keluvchi F.I.K:"
            calcContain.appendChild(text6);
    
            let btn4 = document.createElement("button");
            btn4.className="digit"
            btn4.innerText = "0.84";
            btn4.addEventListener('click',function click() {
                h = username;
                sum(0.84,username);
            });
            calcContain.appendChild(btn4);
        
            let btn5 = document.createElement("button");
            btn5.className="digit"
            btn5.innerText = "0.85";
            btn5.addEventListener('click',function click() {
                h = username;
                sum(0.85,username);
            });
            calcContain.appendChild(btn5);
        
            let btn6 = document.createElement("button");
            btn6.className="digit"
            btn6.innerText = "0.86";
            btn6.addEventListener('click',function click() {
                h = username;
                sum(0.86,username);
            });
            calcContain.appendChild(btn6);
        }
        if (username === 0){
            let text3 = document.createElement("h5");
            text3.className = "error"
            text3.innerText = "Xatolik"
            text3.style.color="red"
            calcContain.appendChild(text3);
        }
  
})

let input2 = document.getElementById("dom2");
let input3 = document.getElementById("dom3");

function sum(i) {
    let s = i * 0.95;
    fik = s;
    let text7 = document.createElement("h3");
    text7.className = "summa1";
    text7.innerText= "Sizda hozir Agregat F.I.K miqdori " + s + "ga teng."  
    calcContain.appendChild(text7);

    let text8 = document.createElement("h3");
    text8.className="summa2";
    text8.innerText= "Endi hisoblashim uchun Q miqdorini kirirng!"
    calcContain.appendChild(text8);
    // idsini username-field-2 qilamiz
    input2.innerHTML='<input type="number" name="username" id="username-field-2" class="login-form-field" placeholder="">';
    // input3.innerHTML='<input type="submit" value="Enter" id="login-form-submit2" onclick="event()">';\

    let btn9 = document.createElement("button");
    btn9.className="login-form-submit2";
    btn9.type="submit"
    btn9.innerText="Enter";
    btn9.addEventListener('click',function click() {
        // inputlar qiymatini olish
        let input4= document.getElementById("username-field-2");
        q = input4.value;

        general();
    });
    input3.appendChild(btn9);
    
}

let input5 = document.getElementById("dom4")
     
function general(){
    //hammasini ishlatib ko'rish
    let summa = h * fik * q * 9.81;
    
    let text9 = document.createElement("button");
    text9.className="last-sum";
    text9.innerText= "GES dastlabki quvvati:" + summa;
    input5.appendChild(text9);    
}
   

