let nums = [-1,0,3,6,7,9];
let target = 6;
var search = function(nums, target) {
    let s=0, e=nums.length-1;
    let mid = Math.floor((s + e) / 2);
    

    while(s<=e){
        mid = Math.floor((s + e) / 2);
        if(nums[mid] == target) return mid;
        if(nums[mid]>target){
            e = mid -1;
        }else{
            s = mid + 1;
        }
    }
    return -1;
};

console.log(search(nums, target));