let btn3=document.getElementById("btn1");
let btn4=document.getElementById("btn2");
btn3.addEventListener("click",myfunction);
btn4.addEventListener("click",myfunction1);

function myfunction(){
    let a=document.getElementById("no").value;
    a++;
    document.getElementById("no").value=a;
}
function myfunction1(){
    let a=document.getElementById("no").value;
    a--;
    document.getElementById("no").value=a;
}