'use strict';

function collectSameElements(collectionA, objectB) {
   var result=[] ;
	var i;
	var j;
	var count=0;
	for(i in collectionA){
		for(j in objectB.value){
			if(collectionA[i].key===objectB.value[j]){
				result[count] = collectionA[i].key;
				count++;
			}
		}
	}
  //return 'Implement the practice require, and begin changing code in this row';
  return result
}
