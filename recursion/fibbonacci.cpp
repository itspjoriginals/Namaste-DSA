#include<iostream>
using namespace std;

int printFibbonacci(int n){
  if(n<= 1) return n;
  return printFibbonacci(n-1) + printFibbonacci(n-2);
}

void printSeries(int n) {
    for (int i = 0; i <= n; i++) {
        cout << printFibbonacci(i) << " ";
    }
    cout << endl;
}

int main(){
  int n;
  cout<<"Enter Number : "<<endl;
  cin>>n;

  printSeries(n);
  return 0;
}