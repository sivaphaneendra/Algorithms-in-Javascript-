function selectionsort(array){
	var n= array.length,min=0,index=0;
	
	for(var i=0;i<n;i++){
		min=array[i];
		for(var j=i+1;j<n;j++){
			if(min>array[j]){
				min=array[j];
				index=j;
			}
		}
		if(array[i]>min){
		 var temp = array[i];
		 array[i]=array[index];
		 array[index]=temp;
		}
	}
	
	console.log("sorted array", array);
}

selectionsort([20,8,5,11,13,15]);