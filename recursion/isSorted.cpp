#include<iostream>
using namespace std;


bool isSorted(int* arr, int n){
  if(n==0) return true;
  if(arr[n-1]>arr[n]) return false;
  return isSorted(arr, n-1);
}

void fun(int i, int n) {
    if (i > n) return;
    cout << i << " ";
    fun(i + 1, n);
    cout << i << " ";
}


int main(){
  int arr[] = {1,2,3,5,6};
  bool res = isSorted(arr,5);
  // cout << "Array is " << (res ? "sorted" : "not sorted") << endl;
  fun(1, 3);
  return 0;
}