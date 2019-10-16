function calcular(){
    var salario = document.getElementById("salario").value;
    gratificacao = parseFloat(salario) * 0.05;
    imposto = parseFloat(salario) * 0.07;
    novosalario = parseFloat(salario) + gratificacao - imposto;
   alert("O valor do novo salário é: R$" + novosalario);
}