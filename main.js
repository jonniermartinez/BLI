let screenShower = document.getElementById('screenShower');
let btnFormat = document.getElementById('btnFormat')
let textArea =  document.getElementById('recolector');

let stringHtml 
let arrTags = [] ;

let siguienteIndice = function(){
    return arrTags[arrTags.length-1].final+1;
}
let nextIndex;

btnFormat.addEventListener('click', respuesta)


//...................................................
function respuesta() {
    
stringHtml =  textArea.value;
stringHtml.indexOf('<', 0)
// stringHtml = stringHtml.slice(stringHtml.indexOf('<', 0) , stringHtml.length - stringHtml.indexOf('<', 0))

arrTags.push(indexadorDeCaracteres(0 , "<" , ">"));
nextIndex = siguienteIndice();

while(indexadorDeCaracteres( nextIndex , "<" , ">" ).inicio !== -1){
    arrTags.push(indexadorDeCaracteres( nextIndex , "<" , ">" )  )    
    nextIndex = siguienteIndice();
    // console.log(nextIndex);
}
    
}
//...................................................


//...................................................
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
//...................................................


 
 
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


//-----------------------
// codigo que probamos y funciona 2:16 am 7 sept 2022
// planeando el paso 3 ( referente a los  tags )
let =`</input type="text" >`
let count = 6
const regex =  new RegExp('^[A-Z]+$', 'i')

regex.test(et.charAt(count) )

// -----------------------
