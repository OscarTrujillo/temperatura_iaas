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

    var result;
    
   ///
   this.c2f=function(number){
      result = (number * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
   
    this.f2c=function(number){
      result = (number - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    
    this.getresult =function(){
    return cadena
  }
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
      
      var type= a.getc();
      var number = parseFloat(this.getn());
      
      ///
          if (type == 'c' || type == 'C') {
              a.c2f(number);
          }
          else{
            a.f2c(number);
          }
   
  converted.innerHTML = a.getresult();
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }

}