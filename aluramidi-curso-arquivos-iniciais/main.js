function tocaSom (seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

   
   if (elemento && elemento.localName === 'audio'){
        elemento.play();

   }
   else {
    console.log('Elemento não encontrado ou seletor invalido');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
   

    tecla.onclick = function (){
        tocaSom(idAudio);
    }       

tecla.onkeydown = function(evento){
    console.log(evento.code == 'Space' || evento.code === 'Enter' );
    if (evento.code === 'Space'){
        tecla.classList.add('ativa');
    }
    
   
    
}
tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
}
}  


