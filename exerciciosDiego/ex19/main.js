function calcular(){
    var salario = document.getElementById("salario").value;
    gratificacao = 50;
    imposto = parseFloat(salario) * 0.10;
    novosalario = parseFloat(salario) + gratificacao - imposto;
   alert("O valor do novo salário é: R$" + novosalario);
}