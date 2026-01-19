#include<iostream>
using namespace std;

void printNum(int i, int n){
  if(i>n){
    return;
  }
  printNum(i+1,n);
  cout<<i<<" ";
}

int main(){
  int n;
  cin>>n;
  printNum(1, n);
  return 0;
}