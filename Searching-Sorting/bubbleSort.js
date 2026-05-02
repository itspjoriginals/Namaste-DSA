let arr = [5,2,4,1];
let n = arr.length;
function bubbleSort(){
  let isSwapped = false;
  for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1-i; j++){
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        isSwapped = true;
      }
    }
    if(!isSwapped){
      break;
    }
  }
}
bubbleSort();

console.log(arr);