function calcular(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    dividendo = num1;
    divisor = num2;
    quociente = dividendo / divisor;
    resto = dividendo % divisor;
   alert("Dividendo: " + dividendo + "\nDivisor: " + divisor + "\nQuociente: " + quociente + "\nResto: " + resto);
}