// https://leetcode.com/problems/two-sum/

export const twoSum = function(nums, target) {
    const answer = [];

    nums.forEach((num1, index1) => {
        nums.forEach((num2, index2) => {
            if(num1 + num2 === target && index1 !== index2){
                answer[0] = index1;
                answer[1] = index2;
            }
        })
    })

    return answer;
};