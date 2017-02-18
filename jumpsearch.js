//jump search for sorted arrays - O(sqrt(n))
function jumpsearch(array, x){
	var prev=0,n=array.length;
	var step=Math.floor(Math.sqrt(n));
	
	while(array[Math.min(step,n)]-1<x){
		prev=step;
		step += step;
		if(prev >=n)
			return -1;
	}
	
	while(array[prev]<x){
		prev++;
		if(prev == Math.min(step,n))
			return -1;
	}
	
	if(array[prev]==x)
		return prev;
	
	return -1;
}

console.log(jumpsearch([15,20,35,40,82,90,95],82));