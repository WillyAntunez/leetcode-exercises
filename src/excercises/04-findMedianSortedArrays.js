export const findMedianSortedArrays = (nums1, nums2) => {
    
    const merged = nums1.concat(nums2).sort((a,b) => a - b);
    
    if(merged.length % 2 === 0){
        return (merged[merged.length/2-1] + merged[merged.length/2]) / 2;
    }else{
        return merged[Math.round((merged.length/2)-1)]
    }
    
}