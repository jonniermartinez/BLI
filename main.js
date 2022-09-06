let btnFormat = document.getElementById('btnFormat')
let textArea =  document.getElementById('recolector');

let stringHtml 
let arrTags = [] ;

let siguienteIndice = function(){
    return arrTags[arrTags.length-1].final+1;
}
let nextIndex;

function respuesta() {
    stringHtml = `<div>
    <input type="radio" id="propiedad7" name="drone" value="propiedad7">
    <label for="propiedad7">propiedad7</label>
    </div>`;
     
    arrTags.push(indexadorDeCaracteres(0 , "<" , ">"));
    nextIndex = siguienteIndice();
    console.log(nextIndex)    
    while (nextIndex < stringHtml.length) {
        arrTags.push(indexadorDeCaracteres( nextIndex , "<" , ">" )  )
        nextIndex = siguienteIndice();
        console.log(nextIndex);
    }
    
}


 btnFormat.addEventListener('click', respuesta)

 function indexadorDeCaracteres(indexIni , charIni , charFin){
     
     //devuelve un indice del charIni       <parametro2>
     // y el indice del       charFin       <parametro3>
     // que esten mas cercanos al indexIni  <parametro1>
     if(indexIni<stringHtml.length){
         var devolver =
          {inicio:stringHtml.indexOf(charIni , indexIni) , 
           final:stringHtml.indexOf(charFin , indexIni) }
         return devolver; 
      }
 }
 


 
 
 // ----------------------------------------
 //para traer el contenido entre picoparentesis de abertura y cierre
 // var n = 1
 // stringHtml.substr(arrTags[n].inicio+1 , arrTags[n].final-arrTags[n].inicio-1);
 // ----------------------------------------
 // para buscar un pedazo de string entre dos indices:
 
 function sliceStringBetweenToIndex(iniIndex, lastIndex){
     var palabra = ""
     for(let i = iniIndex + 1  ; i<= lastIndex - 1; i++){
          palabra += stringHtml.charAt(i)
     }
     return palabra
 }
