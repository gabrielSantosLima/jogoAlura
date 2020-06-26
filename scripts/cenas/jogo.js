class Jogo{
  
  constructor(){
    this.indice = 0;
  }
  
  setup() {
    createCanvas(windowWidth, windowHeight);
    
    if(cenaAtual === "jogo"){
      document.querySelector('.botao-tela-inicial').remove()
    }

    cenario = new Cenario(imagemCenario, 2);
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

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
      12
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
      10
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
      10
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
    
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    const linhaAtual = fita.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoIsVisivel = inimigo.x < - inimigo.largura;
    const inimigoVelocidade = linhaAtual.velocidade 

    inimigo.exibe();
    inimigo.move();
    
    if(inimigoIsVisivel){
      this.indice++;
      inimigo.reaparece()

      if(this.indice > fita.mapa.length){
        this.indice = 0;
      }

      inimigo.velocidade = inimigoVelocidade; 
      console.log(`O inimigo atual é ${this.inimigoAtual}`)
    }
    

    if(personagem.estaColidindo(inimigo)){
      console.log('Colidiu!');

        vida.perdeVida();
        personagem.ficaInvencivel();
        
        if(vida.vidas === 0){
          image(imagemGameOver, width/2 - 200, height/3);
          noLoop();
        }
        // noLoop();
    }

    personagem.exibe();
    personagem.aplicaGravidade();
  }
}