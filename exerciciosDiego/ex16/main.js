function calcular(){
    var salario = document.getElementById("salario").value;
    novosalario = parseFloat(salario) + (parseFloat(salario) * 0.25);
   alert("O valor do novo salário é: R$" + novosalario);
}