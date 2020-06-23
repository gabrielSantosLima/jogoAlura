class Inimigo extends Animacao{
    
  constructor(matriz, imagem, x, largura, altura, larguraS, alturaS, velocidade){
    super(matriz, imagem, x, largura, altura, larguraS, alturaS);
    this.velocidade = velocidade;
    this.y = height - this.altura
  }

  move(){
    this.x -= this.velocidade;
    
    if(this.x < -this.largura){
      this.x = width;
    }
  }
}