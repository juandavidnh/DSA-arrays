function mergeArrays(array1, array2){
    let combinedArray = []

    for(let i = 0; i < array1.length; i++){
        combinedArray.push(array1[i])
    }

    for(let j = 0; j < array2.length; j++){
        combinedArray.push(array2[j])
    }

    return combinedArray.sort((a, b) => {return a-b})
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))