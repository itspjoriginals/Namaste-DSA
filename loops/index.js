//write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.

// let arr = [2, 33, 16, 8, 7, 1, 5, 9, 43];

// function findIndex(num){
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//       return i;
//     }
//   }
//   return -1;
// }

// let idx = findIndex(70);
// console.log(idx);


//write a functions to count of negative numbers in a array.

// function negativeCount(arr){
//   let count=0;
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//       count++;
//     }
//   }
//   return count;
// }
// let arr = [15, -7, 0, 23, -4, 9, -12, 18, -1, 5];

// let result = negativeCount(arr);
// console.log(result);


//Function to return largest element in array.

// function findLargest(arr){
//   let largest_el = -Infinity;
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest_el){
//       largest_el= arr[i];
//     }
//   }
//   return largest_el;
// }

// let arr = [15, -7, 0, 23, -4, 9, -12, 18, -1, 5];

// let result = findLargest(arr);
// console.log(result);


//function to return second Largest

// function secondLargest(arr){
//   let largest_el = -Infinity;
//   let secondLargest_el= -Infinity;

//   for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest_el ){
//       secondLargest_el= largest_el;
//       largest_el = arr[i];
//     } 
//     else if(arr[i]<largest_el && arr[i] > secondLargest_el ){
//       secondLargest_el = arr[i];
//     }
    
//   }

//   return secondLargest_el;
// }

// let arr = [10,20,8,9,3,5,20];

// let result = secondLargest(arr);
// console.log(result);


//Loops in Loops

for(let i=0; i<3; i++){
  for(let j=i; j>0; j--){
    console.log(i,j);
  }
}