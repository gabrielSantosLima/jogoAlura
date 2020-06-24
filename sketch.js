let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;

let pontuacao;

let cenario;

let personagem;

let inimigo;
let inimigoTroll;
let inimigoVoador;

let somDoJogo;
let somDoPulo;

const inimigos = [];

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload(){
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemGameOver = loadImage('./imagens/assets/game-over.png');
  
  imagemPersonagem =   loadImage('./imagens/personagem/correndo.png');
  
  imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('./imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');
  
  pontuacao = new Pontuacao();
  
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./sons/jump.flac');
}

function keyPressed(){
  
  if(key === 'ArrowUp'){
    personagem.pula();
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cenario = new Cenario(imagemCenario, 2);
  
  personagem = new Personagem(
    matrizPersonagem, 
    imagemPersonagem, 
    200,
    30, 
    110, 
    135, 
    220, 
    270,
    10
  );
  
  inimigos.push(new Inimigo(
    matrizInimigo, 
    imagemInimigo, 
    width,
    30,
    52, 
    52, 
    104, 
    104,
    12,
    30
  )); //inimigo -> Gotinha


  inimigos.push(new Inimigo(
    matrizInimigoVoador, 
    imagemInimigoVoador, 
    width - 52,
    200,
    100, 
    75, 
    200, 
    150,
    10,
    2500
  )); //inimigo -> Voador
  
  inimigos.push(new Inimigo(
    matrizInimigoTroll, 
    imagemInimigoTroll, 
    width,
    28,
    200,
    200,
    400,
    400,
    10,
    1500
  ));// inimigo -> Troll

  frameRate(40);
  
  // console.log(somDoJogo)
  // somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  pontuacao.exibe();
  pontuacao.adicionarPonto();

  inimigos.map(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if(personagem.estaColidindo(inimigo)){
      console.log('Colidiu!');

      image(imagemGameOver, width/2 - 200, height/2 - 200);
      noLoop();
    }
  })

  personagem.exibe();
  personagem.aplicaGravidade();
  
  
  cenario.move();

}