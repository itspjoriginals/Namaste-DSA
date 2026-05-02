function isPalindrome(n) {
  let num = n;
  let digit, reverseNum = 0;
  while(num>0){
  digit = num % 10;
  reverseNum = (reverseNum * 10) + digit;
  num = Math.floor(num / 10);
}
if(reverseNum == n){
  return true;
}else{
  return false;
}
}

let ans = isPalindrome(121);
console.log(ans);
