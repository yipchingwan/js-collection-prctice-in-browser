'use strict';

function collectSameElements(collectionA, collectionB) {
	var result=[] ;
	var i;
	var j;
	var count=0;
	for(i in collectionA){
		for(j in collectionB){
			if(collectionA[i]===collectionB[j]){
				result[count] = collectionA[i];
				count++;
			}
		}
	}
  //return 'Implement the practice require, and begin changing code in this row';
  return result
}
