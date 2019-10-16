function imprimir(){
    var num = document.getElementById("num").value;
    antecessor = parseInt(num) - 1;
    sucessor = parseInt(num) + 1;
    document.write("Seu antecessor é " + antecessor + " e o seu sucessor é " + sucessor);
}