// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// Accepted
// 1,920,811
// Submissions
// 3,142,791


var containsDuplicate = function(nums) {
    let call = 0
    nums = nums.sort()
    for(i = 0; i<= nums.length; i++){
        if(nums[i]===nums[i-1]){
            call = 1
        }
    }
    if (call === 1){
        return true
    }else {
        return false
    }
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
