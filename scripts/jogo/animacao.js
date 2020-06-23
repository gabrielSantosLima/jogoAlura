class Animacao{
  
  constructor(matriz, imagem, x, largura, altura, larguraS, alturaS){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = height - this.altura;
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