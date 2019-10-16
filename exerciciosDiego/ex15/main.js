function calcular(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    media = ((parseFloat(n1) * parseFloat(p1)) + (parseFloat(n2) * parseFloat(p2)) + (parseFloat(n3) * parseFloat(p3))) / (parseFloat(p1) + parseFloat(p2) + parseFloat(p3));
   alert("A média ponderada das notas é: " + media);
}