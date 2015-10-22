self.onmessage=function(e){
	
	if(e.data[1]== 'c' || e.data[1] == 'C'){
		var res;
		res=(e.data[0]* 9/5)+32;
		self.postMessage(res);

	}
	else{
		var res;
		res=(e.data[0]-32)*5/9;
		self.postMessage(res);

	}



}