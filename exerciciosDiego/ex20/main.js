function calcular(){
    var deposito = document.getElementById("deposito").value;
    var taxa = document.getElementById("taxa").value;
    rendimento = parseFloat(deposito) * (parseFloat(taxa) / 100);
    total = parseFloat(deposito) + parseFloat(rendimento);
   alert("O valor do rendimento é: R$" + rendimento + "\n O valor total após o rendimento é de: R$" + total);
}