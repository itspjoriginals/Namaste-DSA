// console.log("hello World");

// function isEligibleToVote (age) {
//     if(age<0){
//         console.log("Enter valid age");
//     }
//     else if(age<18){
//         console.log("You're minor!");
//     }
//     else{
//         console.log("Yes! you can Vote");
//     }
// }

// isEligibleToVote(-1 );

// function isEvenOdd(num) {
//     if(num%2==0){
//         console.log(`${num} is Even`);
//     }
//     else{
//         console.log(`${num} is Odd.`);
//     }
// }

// isEvenOdd(123);


// function searchElement(arr, target) {

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==target){
//             return i;
//         }
//     }

//     return -1;
// }
// let arr = [4, 2,0, 10, 8, 30];
// let index = searchElement(arr, 10);

// console.log(index);


function countNegative(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}

let arr = [-1, 2, 3, -4, 5, -6, -7, 8]

let res = countNegative(arr);
console.log(res);

 