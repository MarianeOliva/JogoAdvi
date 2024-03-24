Joguinho de Adivinhação.

Este é um jogo de adivinhação implementado em JavaScript, HTML e CSS. Cuja a finalidade está em o usuário tentar adivinhar um número aleatório gerado pelo programa, de 1 a 1000.

Descrição do código: 

No início do jogo, um número aleatório entre 1 e 1000 é gerado e armazenado na variável sorteio. Este é o número que o usuário tentará adivinhar.

A interface do usuário consiste em um campo de entrada onde o usuário pode digitar seu palpite e um botão “Tentar”. Quando o botão “Tentar” é clicado, a função adivinharNumero é chamada.
A função adivinharNumero lê o palpite do usuário do campo de entrada e compara com o número sorteado. Dependendo de quão perto o palpite está do número sorteado, diferentes mensagens são exibidas para o usuário:

 ° Se o palpite for igual ao número sorteado, uma mensagem de parabéns é exibida.
 ° Se o palpite estiver a uma distância de 1 a 10 do número sorteado, uma mensagem aparece informando que o usuário está muito proximo de acertar o número.
 ° Se o palpite estiver a uma distância de 10 a 30 do número sorteado, uma mensagem aparece informando que o usuário está próximo do número.
 ° Se o palpite for maior que o número sorteado e menor ou igual a 1000, uma mensagem parece informando que o usuário está muito longe de acertar e que deve digitar um número menor.
 ° Se o palpite for menor que o número sorteado e menor ou igual a 1000, uma mensagem parece informando que o usuário está muito longe de acertar e que deve digitar um número maior.
 ° O sistema faz a contagem de quantas tentativas o usuário fez enquanto joga, e mostra a cada entrada de dado. Para que ele acompanhe a quantidade de tentativas enquanto joga.

O sistema também verifica se o dado digitado atende os parâmetros do jogo (número de 1 a 1000. Não permite entrada de texto). 
Caso não atenda, uma mensagem de erro é mostrada e pede para o jogador digitar corretamente.

obs. Não reinicia o jogo, permitindo que o usuário continue jogando normalmente.

No final do jogo, junto com a mensagem de acerto, o sistema mostra quantos dados errados o usuário digitou enquanto jogava, junto com o total de tentativas.

E para finalizar, há um botão de “Reiniciar” que, quando clicado, chama a função reiniciarJogo. Esta função gera um novo número aleatório, redefine o número de tentativas e erros para zero, limpa o campo de entrada e a mensagem exibida para o usuário. Permitindo que ele recomece o jogo do zero.
