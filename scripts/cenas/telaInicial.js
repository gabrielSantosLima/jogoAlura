class TelaInicial{
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial,0,0, width, height)    
  }

  _texto(){
    textFont(fonteTelaInicial);
    textAlign('center')
    
    textSize(90);
    text('As aventuras de', width/2, 200);
    
    textSize(100);
    text('Hipstar', width/2, 260);
  }

  _botao(){
    botao.y = height / 7 * 5;
    botao.draw();
  }
}