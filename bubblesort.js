function bubblesort(array){
	var n=array.length,temp=0,bool=false;
	
	for(var i=0;i<n;i++){
		bool=false
		for(var j=0;j<n-i-1;j++){
			if(array[j]>array[j+1]){
				temp=array[j];
				array[j]=array[j+1];
				array[j+1]=temp;
				bool=true;
			}
		}
		
		if(!bool)
			break;
	}
	
	console.log("sorted array", array);
}

bubblesort([5,1,4,2,8]);

