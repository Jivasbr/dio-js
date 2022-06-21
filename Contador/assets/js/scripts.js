// Projeto 1

// Declara a class ".currentNumber" como variavel "contador"
var contador = document.querySelector('.currentNumber');

// Seleciona o botão ".subtrair" e aplica função para diminuir 1 número a cada clique
document.querySelector('.subtrair').addEventListener('click', function(){
    var numero = parseInt(contador.textContent) - 1;
    contador.textContent = numero;
    
        // Se numero for diferente de -10 os botões permanecem ativos
        if(numero !== -10){
        $('.subtrair').attr("disabled", false),
        $('.adicionar').attr("disabled", false);

        // Caso contrário, o botão "subtrair" é desativado
        } else {
        $('.subtrair').attr("disabled", true);
        }
        
        // Se numero for negativo, a cor do número será vermelha
        if(numero <= -1) {
        document.getElementById("currentNum").style.color = "red";

        // Se não for um número negativo, a cor será branca.
        } else {
        document.getElementById("currentNum").style.color = "white";
        }
})

// Seleciona o botão ".adicionar" e aplica função para aumentar 1 número a cada clique
document.querySelector('.adicionar').addEventListener('click', function(){
    var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;
        
        // Se numero for diferente de 10 os botões permanecem ativos
        if(numero !== 10) {
        $('.adicionar').attr("disabled", false),
        $('.subtrair').attr("disabled", false),
        document.getElementById("currentNum").style.color = "white"; 
        
        // Caso contrário, o botão "adicionar" é desativado
        } else {
        $('.adicionar').attr("disabled", true)
        }

        // Se numero for negativo, a cor do número será vermelha
        if(numero <= -1) {
        document.getElementById("currentNum").style.color = "red";

        // Se não for um número negativo, a cor será branca.
        } else {
        document.getElementById("currentNum").style.color = "white";
        }
})