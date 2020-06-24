class Animacao{
  
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraS, alturaS){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraS = larguraS;
    this.alturaS = alturaS;

    this.index = 0;
  }

  exibe(){
    image(
      this.imagem, 
      this.x, 
      this.y, 
      this.largura, 
      this.altura, 
      this.matriz[this.index][0], 
      this.matriz[this.index][1], 
      this.larguraS,
      this.alturaS
    );
    
    this.anima();
  }
  
  anima(){
      this.index++;
      
      if(this.index >= this.matriz.length - 1){
        this.index = 0;
      }

      // this.index = this.index++ >= this.matriz.length - 1 ? 0 : index++;
  }
}