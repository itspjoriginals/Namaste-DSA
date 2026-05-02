let arr = [3,2,6,7,1];
let sum=0;

function sumArr(n) {

    if(n<0) return 0;

    let current = (arr[n]%2!=0 ? arr[n]: 0);

    return current + sumArr(n-1);
}

 let ans = sumArr(arr.length-1);
console.log(ans);