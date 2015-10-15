"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Media(num,cad) {
  
   this.numero=num;
   this.cadena=cad;

}

function Temperatura (num, cad) {
   Media.call(num, cad);
}



function calculate() {

  var temp = original.value;
  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    
    var result;
    var num = m[1]; 
    var type = m[2];

   
   var num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}