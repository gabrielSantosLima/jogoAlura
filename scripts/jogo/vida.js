class Vida{
  
  constructor(max, inicial){
    this.max = max;
    this.inicial = inicial;
    this.vidas = inicial;

    this.largura = 50;
    this.altura = 50;
  }

  draw(){
    for(let i = 0; i < this.vidas; i++){
      image(imagemVida, i * 65 + 20, 20, this.largura, this.altura);
    }
  }

  ganhaVida(){
    if(this.vidas <= this.max){
      this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--
  }

}