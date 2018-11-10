'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var tempComp = [];
	var collectionC = [];
	var count = 0;
	var i;
	var j;
	var minus = 1;
	for(i in collectionA){
		if(!tempComp.includes(collectionA[i])){
			tempComp[count] = collectionA[i];
			count++;
		}
	}
	for(i in tempComp){
		count = 0;
		for(j in collectionA){
			if(tempComp[i]===collectionA[j]){
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
