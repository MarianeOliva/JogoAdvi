Joguinho de Adivinhação.

Este é um jogo de adivinhação implementado em JavaScript e HTML. Cuja a finalide está em o usuário tentar adivinhar um número aleatório de 1 e 1000.

Descrição do código: 

No início do jogo, um número aleatório entre 1 e 1000 é gerado e armazenado na variável sorteio. Este é o número que o usuário tentará adivinhar.

A interface do usuário consiste em um campo de entrada onde o usuário pode digitar seu palpite e um botão “Tentar”. Quando o botão “Tentar” é clicado, a função adivinharNumero é chamada.
A função adivinharNumero lê o palpite do usuário do campo de entrada e compara com o número sorteado. Dependendo de quão perto o palpite está do número sorteado, diferentes mensagens são exibidas para o usuário:

 ° Se o palpite for igual ao número sorteado, uma mensagem de parabéns é exibida.
 ° Se o palpite estiver a uma distância de 1 a 10 do número sorteado, uma mensagem aparece informando que o usuário está muito proximo de acertar o número.
 ° Se o palpite estiver a uma distância de 10 a 30 do número sorteado, uma mensagem aparece informando que o usuário está próximo do número.
 ° Se o palpite for maior que o número sorteado e menor ou igual a 1000, uma mensagem parece informando que o usuário está muito longe de acertar e que deve digitar um número menor.
 ° Se o palpite for menor que o número sorteado e menor ou igual a 1000, uma mensagem parece informando que o usuário está muito longe de acertar e que deve digitar um número maior.

E para finalizar, há um botão de “Reiniciar” que, quando clicado, chama a função reiniciarJogo. Esta função gera um novo número aleatório, redefine o número de tentativas e erros para zero, limpa o campo de entrada e a mensagem exibida para o usuário. Permitindo que ele recomece o jogo do zero.
