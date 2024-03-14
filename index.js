function add() {
    const a = parseInt(document.getElementById("num1").value);
    const b = parseInt(document.getElementById("num2").value);
    document.getElementById("hd").innerText = num1+num2;
    document.getElementById("user").value = "";
    document.getElementById("type").value = "";
}
function sub(){
    const a=parseInt(document.getElementById("num1").value);
    const b=parseInt(document.getElementById("num2").value);
    document.getElementById("hd").innerText =num1-num2;
    document.getElementsByid("user").value="";
    document.getElementsByid("type").value="";
}
function mult(){
    const a=parseInt(document.getElementById("num1").value);
    const b=parseInt(document.getElementById("num2").value);
    document.getElementById("hd").innerText =num1*num2;
    document.getElementsByid("user").value="";
    document.getElementsByid("type").value="";
}
function divi(){
    const a=parseInt(document.getElementById("num1").value);
    const b=parseInt(document.getElementById("num2").value);
    document.getElementById("hd").innerText =num1/num2;
    document.getElementsByid("user").value="";
    document.getElementsByid("type").value="";
}