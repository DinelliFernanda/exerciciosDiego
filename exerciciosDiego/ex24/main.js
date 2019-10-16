function calcular(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    total = parseInt(num1) ** parseInt(num2);
    alert("O total é: " + total);
}