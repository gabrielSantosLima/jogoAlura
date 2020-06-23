class Personagem extends Animacao{
  
  constructor(matriz, imagem, x, largura, altura, larguraS, alturaS, velocidade){
    super(matriz, imagem, x, largura, altura, larguraS, alturaS);
    this.velocidade = velocidade;
    
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadePulo = 0;
    this.gravidade = 3;
  }
  
  pula(){
    if(this.y === this.yInicial){
      this.velocidadePulo = -30;
      somDoPulo.play(); 
    }
  }
  
  aplicaGravidade(){
    this.y += this.velocidadePulo;
    
    this.velocidadePulo += this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
    }
  }
  
  estaColidindo(inimigo){
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