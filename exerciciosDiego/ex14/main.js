function calcular(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
   alert("A média das notas é: " + media);
}