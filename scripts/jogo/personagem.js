class Personagem{
  
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [
      [0,0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0,270],
      [220,270],
      [440,270],
      [660, 270],
      [0,540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 1080]
    ],
    this.index = 0;
  }
  
  exibe(){
    image(this.imagem, 0, height-135, 110,135, this.matriz[this.index][0], this.matriz[this.index][1], 220,270);
    
    this.anima();
  }
  
  anima(){
      this.index++;
      
      if(this.index >= this.matriz.length - 1){
        this.index = 0;
      }
  }
}