// Pattern 1:
// let n =4;
// for(let i=0; i<n; i++){
//     let row=" ";
//     for(let j=0; j<n; j++){
//       row = row + "*";
//     }
//     console.log(row);
//   }

// Pattern 2:
// let n=4;
// for(let i=0; i<n; i++){
//   let row = " ";
//   for(let j=0; j<i+1; j++){
//       row = row + "*";
//   }
//   console.log(row);
// }

// Pattern 3:
// let n=5;
// for(let i=0; i<n; i++){
//   let res=" " ;
//   for(let j=0; j<i+1; j++){
//    res = res + (j+1);
//   }
//   console.log(res);
// }

// Pattern 4:
// let n=5;
// for(let i=0; i<n; i++){
//   let res=" " ;
//   for(let j=0; j<i+1; j++){
//    res = res + (i+1);
//   }
//   console.log(res);
// }

// Pattern 5: (Imp)
// let n=5;
// for(let i=0; i<n; i++){
//   let res=" " ;
//   for(let j=0; j<n-i; j++){
//    res = res + (j+1);
//   }
//   console.log(res);
// }


// Pattern 6: 
// let n=5;
// for(let i=0; i<n; i++){
//   let res=" " ;
//   for(let j=0; j<n-i; j++){
//    res = res + ("*");
//   }
//   console.log(res);
// }

// Pattern 7: 
// let n=5;
// for(let i=0; i<n; i++){
//   let res=" " ;
//   for(let j=0; j<n-i; j++){
//    res = res + ("*");
//   }
//   console.log(res);
// }

// Pattern 8: (Imp)
// let n=5;
// for(let i=0; i<n; i++){
//   let res=" " ;
//   for(let j=0; j<n-(i+1); j++){
//    res = res + (" ");
//   }
//   for(let k=0; k<i+1; k++){
//    res = res + ("*");
//   }
//   console.log(res);
// }

// Pattern 9:
// let n =5;
// for(let i=0; i<n; i++){
//   let row=" ", flag=1;
//   for(let j=0; j<i+1; j++){
//     row = row + flag;
//     if(flag==1){
//       flag=0;
//     }else{
//       flag=1;
//     }
//   }
//   console.log(row);

// }

// Pattern 10:
// let n =5;
// let  flag=1;
// for(let i=0; i<n; i++){
//   let row=" ";
//   for(let j=0; j<i+1; j++){
//     row = row + flag;
//     if(flag==1){
//       flag=0;
//     }else{
//       flag=1;
//     }
//   }
//   console.log(row);

// }