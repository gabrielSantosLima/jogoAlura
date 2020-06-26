class Personagem extends Animacao{
  
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraS, alturaS, velocidade){
    
    super(matriz, imagem, x, variacaoY, largura, altura, larguraS, alturaS);
    
    this.velocidade = velocidade;
    this.variacaoY = variacaoY;

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadePulo = 0;
    this.gravidade = 1;

    this.invencivel = false;
  }
  
  pula(){
    if(this.y === this.yInicial){
      this.velocidadePulo = -30;
      // somDoPulo.play(); 
    }
  }
  
  aplicaGravidade(){
    this.y += this.velocidadePulo;
    
    this.velocidadePulo += this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
    }
  }
  
  ficaInvencivel(){
    this.invencivel = true;

    setTimeout(() => {
      this.invencivel = false
    }, 2000);
  }

  estaColidindo(inimigo){
    
    if(this.invencivel){
      return false; 
    }

    const precisao = .7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura* precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura* precisao,
      inimigo.altura* precisao
      );
      
      return colisao;
    }
  }