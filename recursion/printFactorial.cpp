#include<iostream>
using namespace std;

// Functional Recursion
// int printFactorial(int n){
//   int res=1;
//   if(n==1) return 1;
//   return n*printFactorial(n-1);
// }

//Parametrized Recursion
void fact(int n, int ans) { 
    if (n == 0){
      
      cout<< ans;
      return;
    }
    fact(n - 1, ans*n); 
}

int main(){
  int n;
  cout<<"Enter number : "<<endl;
  cin>>n;
  // int factorial = printFactorial(n);
  // cout<<factorial;
    fact(n, 1);
  return 0;
}