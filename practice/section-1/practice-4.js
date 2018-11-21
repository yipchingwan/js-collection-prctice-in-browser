'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[] ;

	var newCollection =[];
	/*for(i in collectionA){
		for(j in objectB.value){
			if(collectionA[i].key===objectB.value[j]){
				result[count] = collectionA[i].key;
				count++;
			}
		}
	}*/
	newCollection = collectionA.map(a=>a.key);
	result = newCollection.filter(a=>objectB.value.includes(a));
  //return 'Implement the practice require, and begin changing code in this row';
  return result;
}
