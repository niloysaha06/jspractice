// var twoSum = function(nums, target) {

//     for (i=0; i < nums.length; i++)
//     for(j= 1; i < nums.length; i++)
//     if(i+j == target){
//         return([i,j])
//     }
// }

// console.log(twoSum([3,2,4], 6))


var removeDuplicates = function(nums){
    let duplicate = nums.filter(function(value, index, array){
       return array.indexOf(value) !== index
        
    })
    return duplicate
    
}

console.log(removeDuplicates([1,2,3,1,4,3,4,1,5]))


