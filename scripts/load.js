function preload(){
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemGameOver = loadImage('./imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('./imagens/cenario/telaInicial.png');
  imagemVida = loadImage('./imagens/assets/heart.png');
  
  fonteTelaInicial = loadFont('./imagens/assets/fonteTelaInicial.otf')

  imagemPersonagem =   loadImage('./imagens/personagem/correndo.png');
  
  imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('./imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');
  
  fita = loadJSON('./../fita/fita.json');

  pontuacao = new Pontuacao();
  
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./sons/jump.flac');

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botao = new Botao('Iniciar');
}