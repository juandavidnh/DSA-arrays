function filterArray(array){
    let newArray = []

    for(let i=0; i < array.length; i++){
        if(array[i] <  5){
            continue
        } else {
            newArray.push(array[i])
        }
    }

    return newArray
}

console.log(filterArray([1, 8, 5, -7, 9, 3]))