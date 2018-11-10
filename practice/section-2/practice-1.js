'use strict';

function countSameElements(collection) {
	var tempComp = [];
	var result = [];
	var count = 0;
	var i;
	var j;
	for(i in collection){
		if(!tempComp.includes(collection[i])){
			tempComp[count] = collection[i];
			count++;
		}
	}
	for(i in tempComp){
		count = 0;
		for(j in collection){
			if(tempComp[i]===collection[j]){
				count++
			}
		}
		result[i] = {key: tempComp[i], count: count};
		//alert(result[i].key)
	}
  //return 'Implement the practice require, and begin changing code in this row';
  return result
}
