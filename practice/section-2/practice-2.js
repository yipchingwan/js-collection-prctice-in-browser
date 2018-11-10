'use strict';

function countSameElements(collection) {
	var convertColl=[];
	var i;
	var result=[];
	var count=0;
	for(i in collection){
		if(collection[i].length==1){
			convertColl.push(collection[i]);
		}
		else{
			var tmp = collection[i].split(collection[i].charAt(1))
			var tmpCount = parseInt(tmp[1]);
			for(var a=0; a<tmpCount; a++){
				convertColl.push(tmp[0]);
			}
		}
	}
	for(i in convertColl){
		
		if(i==0){
			count=1;
		}
		
		else{
			if(convertColl[i]===convertColl[i-1]){
				count++;
				if(i==convertColl.length-1){
					result.push({key: convertColl[i], count: count});
				}
			}
			else{
				result.push({key: convertColl[i-1], count: count});
				count=1;
			}

		}

	}
	//alert(convertColl)
	return result
  //return 'Implement the practice require, and begin changing code in this row';
}


