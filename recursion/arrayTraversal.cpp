#include<iostream>
using namespace std;

void printArr(int arr[], int n){
  if(n < 0)return;
  printArr(arr, n-1);
  cout<<arr[n]<<" ";
}

void sumArr(int arr[], int n, int sum){
  if(n<0){
    cout<<sum;
    return; 
  }
  sumArr(arr, n-1, sum+arr[n]);
}

void reverseArr(int* arr, int l, int r){
  if(l>=r){
    return;
  }
  swap(arr[l], arr[r]);
  reverseArr(arr, l+1, r-1);
}

int main(){
  int arr[] = {2, 3, 4, 9, 10};

  // sumArr(arr, 4, 0);
  reverseArr(arr,0,4);
  printArr(arr, 4);

  return 0;
}