function calcular(){
    var raio = document.getElementById("raio").value;
    area = 3.14 * (parseFloat(raio) ** 2);
    alert("A área do círculo é: " + area);
}