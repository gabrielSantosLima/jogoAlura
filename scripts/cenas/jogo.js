class Jogo{
  
  constructor(){
    this.inimigoAtual = 0;
  }
  
  setup() {
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
      100
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
      100
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
      100
    ));// inimigo -> Troll
  
    frameRate(40);
    
    // console.log(somDoJogo)
    // somDoJogo.loop();
  }
  
  keyPressed(key){
    if(key === 'ArrowUp'){
      personagem.pula();
    }
  }

  draw(){
    cenario.exibe();
    cenario.move();
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoIsVisivel = inimigo.x < - inimigo.largura;
    
    inimigo.exibe();
    inimigo.move();

    if(inimigoIsVisivel){
      this.inimigoAtual++;

      if(this.inimigoAtual > 2){
        this.inimigoAtual = 0;
      }

      inimigo.velocidade = parseInt(random(5,20));
      console.log(`O inimigo atual é ${this.inimigoAtual}`)
    }
    

    if(personagem.estaColidindo(inimigo)){
      console.log('Colidiu!');

      image(imagemGameOver, width/2 - 200, height/3);
      // noLoop();
    }

    personagem.exibe();
    personagem.aplicaGravidade();
  }
}