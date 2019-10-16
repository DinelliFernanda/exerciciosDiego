function calcular(){
    var num = document.getElementById("num").value;
    quadrado = parseInt(num) ** 2;
    cubo = parseInt(num) ** 3;
    raizq = Math.sqrt(num)
    raizc = Math.cbrt(num)
    alert("Quadrado do número: " + quadrado +
    "\nCubo do número: " + cubo +
    "\nRaíz quadrada: " + raizq +
    "\nRaíz cúbica: " + raizc);
}