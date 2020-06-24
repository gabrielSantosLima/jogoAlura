class Inimigo extends Animacao{
    
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraS, alturaS, velocidade, delay){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraS, alturaS);
    
    this.velocidade = velocidade;
    this.delay = delay;
    this.variacaoY = variacaoY; 

    this.y = height - this.altura - this.variacaoY;
  }

  move(){
    this.x -= this.velocidade;
    
    if(this.x < -this.largura - this.delay){
      this.x = width;
    }
  }
}