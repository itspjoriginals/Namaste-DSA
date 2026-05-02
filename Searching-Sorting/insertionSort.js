let arr =  [ 4, 5,2, 7,3,6];
let n = arr.length;

function insertionSort(){
  for(let i=1; i<n; i++){
    let curr = arr[i];
    let prev = i-1;

    while(arr[prev]>curr && prev>=0){
      arr[prev+1] = arr[prev];
      prev--;
    }
    arr[prev+1] = curr;
  }
  return arr;
}

let result = insertionSort(arr);
console.log(result);