'use strict';

function countSameElements(collection) {
	//var a = collection[16].replace(/[^A-Za-z0-9\s!?]/g,'');
	//alert(a);
	var result = [];
	var convertColl = [];
	var i;
	var count =0;
	for(i in collection){
		if(collection[i].length==1){
			convertColl.push(collection[i]);
		}
		else{
			var tmp = collection[i].replace(/[^A-Za-z0-9\s!?]/g,'');
			var tmpCount = parseInt(tmp.substring(1,tmp.length));
			for(var a=0; a<tmpCount; a++){
				convertColl.push(tmp.charAt(0));
			}
		}
	}
	//alert(convertColl)
	for(i in convertColl){
		
		if(i==0){
			count=1;
		}
		
		else{
			if(convertColl[i]===convertColl[i-1]){
				count++;
				if(i==convertColl.length-1){
					result.push({name: convertColl[i], summary: count});
				}
			}
			else{
				result.push({name: convertColl[i-1], summary: count});
				count=1;
			}

		}

	}
	return result

  //return 'Implement the practice require, and begin changing code in this row';
}
