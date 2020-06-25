function keyPressed(){
  jogo.keyPressed(key);
}

function setup() {
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  }
}

function draw() {
  cenas[cenaAtual].draw();
}