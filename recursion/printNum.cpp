//print from 1 to N 

#include<iostream>
using namespace std;

void fun(int n) {
    if (n == 0) return;
    fun(n - 1);
    cout << n << " ";
}

void printNum(int i, int n){
  if(i>n) return;
  cout<<i <<" ";
  printNum(i+1, n);
}

void printReverse(int i, int n){
  if(i>n) return;
  printReverse(i+1, n);
  cout<<i<< " ";
}

int main(){
  int n;
  cout<<"Enter number : "<<endl;
  cin>>n;
  // printNum(1, n);
  // cout<<endl;
  // printReverse(1, n);
  fun(3);
  return 0;
}