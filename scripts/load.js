function preload(){
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemGameOver = loadImage('./imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('./imagens/cenario/telaInicial.png');
  
  fonteTelaInicial = loadFont('./imagens/assets/fonteTelaInicial.otf')

  imagemPersonagem =   loadImage('./imagens/personagem/correndo.png');
  
  imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('./imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');
  
  pontuacao = new Pontuacao();
  
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./sons/jump.flac');

  jogo = new Jogo();
  botao = new Botao('Iniciar', 100, 500);
  telaInicial = new TelaInicial();
}