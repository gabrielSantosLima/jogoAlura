let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload(){
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemPersonagem =   loadImage('./imagens/personagem/correndo.png');
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 2);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  
  // console.log(somDoJogo)
  // somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  personagem.exibe();
  cenario.move();
}