#include<iostream>
using namespace std;

int printFactorial(int n){
  int res=1;
  if(n==1) return 1;
  return n*printFactorial(n-1);
}

int main(){
  int n;
  cout<<"Enter number : "<<endl;
  cin>>n;
  int factorial = printFactorial(n);
  cout<<factorial;
  return 0;
}