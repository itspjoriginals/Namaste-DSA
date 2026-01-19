#include<iostream>
using namespace std;

int sum(int i, int n){
  int totalSum =0;
  if(i>n){
    return totalSum ;
  }
  totalSum += i;
  sum(i+1, n);
  
}


int main(){
  int n;
  cout<<"Enter the number : "<<endl;
  cin>>n;
  int ans = sum(1, n);
  cout<<"total sum : "<<ans<<endl;
  return 0;
}