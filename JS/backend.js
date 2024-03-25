let sorteio = Math.floor(Math.random() * 1000) + 1; //Cria um número de sorteio para o jogo

let tentativa = 0; //Variavel criada para verificar quantas tentativas o usuario fez
let erro = 0; //Feita para verificar a quantidades de erros

// Aqui é a função utilizada para criar nosso jogo
function adivinharNumero() {
  let palpite = document.getElementById("palpite").value;

  
  //Mensagem de acerto caso o usuário acerte o número.
  if (palpite == sorteio) {
      document.getElementById(
          "escrever"
          ).innerHTML = `Parabéns, você acertou. \nForam: ${tentativa} tentativa(s) e ${erro} entrada(s) com erro. `;
        }
        
        //Mensagem caso o número digitado seja maior que o sorteado
        if (palpite > sorteio && palpite <= 1000) {
            tentativa += 1;
            document.getElementById(
                "escrever"
                ).innerHTML = `Está longe em. Tente um número menor. \nTentativas: ${tentativa}`;
            }
            
            //Mensagem caso o número digitado seja menor que o sorteado
            if (palpite < sorteio && palpite <= 1000) {
                tentativa += 1;
                document.getElementById(
      "escrever"
    ).innerHTML = `Vish, longe. Tente um número maior. \nTentativas: ${tentativa}`;
}

//Nessa condição verificamos se o número de palpite está numa distãncia de 1 a 10 do número sorteado. E indica ao usúario que ele está próximo.
if (Math.abs(palpite - sorteio) >= 1 && Math.abs(palpite - sorteio) <= 10) {
    if (palpite > sorteio) {
      document.getElementById(
        "escrever"
      ).innerHTML = `Quase, quase!! É número menor. \nTentativas: ${tentativa}`;
    } else {
      document.getElementById(
        "escrever"
      ).innerHTML = `AAAH! É número maior!. \nTentativas: ${tentativa}`;
    }
  }

  //Mesma verificação mas numa distância de 10 a 30 do número sorteado.
  if (Math.abs(palpite - sorteio) > 10 && Math.abs(palpite - sorteio) <= 30) {
    if (palpite > sorteio) {
      document.getElementById(
        "escrever"
      ).innerHTML = `Ta próximo em! Experimenta número menor. \nTentativas: ${tentativa}`;
    } else {
      document.getElementById(
        "escrever"
      ).innerHTML = `Um pouco mais e você acertava. Que tal um número maior?. \nTentativas: ${tentativa}`;
    }
  }

  //Aqui verifica se o número digitado está entre os parâmetros do jogo, e se não estiver mostra uma mensagem de erro mas não impede o jogador de continuar jogando
  if (palpite < 1 || palpite > 1000) {
    document.getElementById(
      "escrever"
    ).innerHTML = `Entrada não válida. Por favor, digite um número entre 1 e 1000.`;
    erro += 1;
  }

  //Não permite entradas que não sejam um número, mas não impede o jogador de continuar jogando
  if (isNaN(palpite)) {
    document.getElementById(
      "escrever"
    ).innerHTML = `Entrada não válida. Por favor, digite um número.`;
    erro += 1;
  }
}

//Função criada para reiniciar o jogo.
function reiniciarJogo() {
  //Reinicia o número de sorteio, de tentativa e erros. Limpa a caixa de entrada e permite que o usuario continue jogando

  sorteio = Math.floor(Math.random() * 1000) + 1;
  tentativa = 0;
  erro = 0;

  document.getElementById("palpite").value = "";
  document.getElementById("escrever").innerHTML = ``;
}
