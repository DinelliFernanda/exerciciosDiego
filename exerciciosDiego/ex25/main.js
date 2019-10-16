function calcular(){
    var pes = document.getElementById("pes").value;
    polegada = parseFloat(pes) * 12;
    jardas = parseFloat(pes) / 3;
    milhas = parseFloat(jardas) / 1760; 
    alert("Polegadas: " + polegada +
    "\nJardas: " + jardas +
    "\nMilhas: " + milhas);
}