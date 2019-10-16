function calcular(){
    var salario = document.getElementById("salario").value;
    var perc_aumento = document.getElementById("perc_aumento").value;
    aumento = parseFloat(salario) * (parseFloat(perc_aumento) / 100);
    novosalario = parseFloat(salario) + parseFloat(aumento);
   alert("O valor do aumento é: R$" + aumento + "\n O valor do novo salário é: R$" + novosalario);
}