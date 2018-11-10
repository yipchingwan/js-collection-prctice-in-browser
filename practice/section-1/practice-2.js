'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[] ;
  var temp = collectionB[0]
	var i;
	var j;
	var count=0;
	for(i in collectionA){
		for(j in temp){
			if(collectionA[i]===temp[j]){
				result[count] = collectionA[i];
				count++;
			}
		}
	}
  //return 'Implement the practice require, and begin changing code in this row';
  return result
}
