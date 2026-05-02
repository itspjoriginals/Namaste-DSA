
function countDigit(n){
let digit = 0;
while(n>0){
  n= Math.floor(n/10);
  digit++;
}
return digit;
}

let ans = countDigit(259);
console.log(ans);