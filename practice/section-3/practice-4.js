'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var convertColl=[];
	var collectionC = [];
	var tempComp = [];
	var i;
	var result=[];
	var count=0;
	var minus = 1;
	for(i in collectionA){
		if(collectionA[i].length==1){
			convertColl.push(collectionA[i]);
		}
		else{
			var tmp = collectionA[i].split(collectionA[i].charAt(1))
			var tmpCount = parseInt(tmp[1]);
			for(var a=0; a<tmpCount; a++){
				convertColl.push(tmp[0]);
			}
		}
	}
	for(i in convertColl){
		if(!tempComp.includes(convertColl[i])){
			tempComp[count] = convertColl[i];
			count++;
		}
	}
	for(i in tempComp){
		count = 0;
		for(j in convertColl){
			if(tempComp[i]===convertColl[j]){
				count++
			}
		}
		collectionC[i] = {key: tempComp[i], count: count};

		//alert(result[i].key)
	}
	for(var i in collectionC){
		for(var j in objectB.value){
			if(collectionC[i].key===objectB.value[j]){
				collectionC[i].count-=minus;
				minus++;
				if(minus>3){
					minus=1;
				}
			}
		}
	}
	return collectionC;

  //return 'Implement the practice require, and begin changing code in this row';
}
