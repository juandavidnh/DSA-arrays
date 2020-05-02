function maxSum(array){
    let total = 0
    let max = 0

    for(let i=0; i < array.length; i++) {
        total += array[i]
        
        if(total > max){
            max = total
        } else {
            continue
        }
    }

    return max
}

console.log(maxSum([4, 6, -3, 5, -2, 1, 20]))