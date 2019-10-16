function calcular(){
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
   area = (parseFloat(base) * parseFloat(base)) / 2;
   alert("A área do triângulo é: " + area);
}