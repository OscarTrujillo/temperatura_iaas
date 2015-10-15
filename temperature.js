"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Media(num,cad) {
  
   var numero=num;
   var cadena=cad;
    
  this.getn =function(){
    return numero
  }
  this.getc =function(){
    return cadena
  }
}

function Temperatura (num, cad) {
    Media.call(this, num, cad);
    var type= this.getc();
    var result;
    
   ///
    var number = parseFloat(this.getn());
    if (type == 'c' || type == 'C') {
      result = (number * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (number - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
   ///
}



function calculate() {

  var temp = original.value;
  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    
    var num = m[1]; 
    var type = m[2];
    
      Temperatura.prototype = new Media;
      a = new Temperatura(num,type);
   
  
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }

}