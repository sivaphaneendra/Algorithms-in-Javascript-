/* Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, 
calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. 
The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays
into one. See following C implementation for details. */

function merge(a, l,m, h){
    var L,R;
    var n1= m-l+1;
    var n2= h-m;
    
    for(var i=0;i<n1;i++)
     L[i] = a[l+i];
    for(i=0;i<n2;i++)
     R[i] = a[m+1+j];
    
    i=0;
    var j=0,k=low;
    while(i<n1 && j<n2){
      if(L[i]<=R[j]){
        a[k]=L[i];
        i++;
      }
      else{
       a[k]=R[j];
       j++;
      }
      k++;
    }
    
    while(i<n1){
     a[k]=L[i];
     i++;
     k++;
    }
    
    while(j<n2){
     a[k]=R[j];
     j++;
     k++;
    }
}

function mergesort(a, l, r){
    if(l<r){
     var mid = l+(r-1)/2;
     mergesort(a,l,m);
     mergesort(a,m+1,r);
     merge(a,l,m,r);   
    }
}

var a = [21,5,9,3,1,8];
console.log("Before merge sort", a);
quicksort(a,0,5);
console.log("After merge sort", a);
