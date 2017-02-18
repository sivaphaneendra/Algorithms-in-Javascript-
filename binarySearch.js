//Binary search works for only sorted arrays - O(logn)

function binarySearch(array,input){
   var mid = array.length/2;
   if(array[mid] == input)
	   return mid;
   else if(array[mid]<input)
	   return binarySearch(array.splice(mid+1,array.length-1),input);
   else
	   return binarySearch(array.splice(0,mid-1),input);
}

console.log(binarySearch([1,3,4,5,6,7,8,9], 7));