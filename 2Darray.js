function twoDArray(array) {
    const originalArr = JSON.parse(JSON.stringify(array))
    let newArray = array
    
    for(let y = 0; y < originalArr.length; y++) {
        for(let x = 0; x < originalArr[y].length; x++) {
            if(originalArr[y][x] === 0) {
                for(let i = 0; i < newArray[y].length; i++) {
                    newArray[y][i] = 0
                }

                for(let j = 0; j < newArray.length; j++) {
                    newArray[j][x] = 0
                }
            } else {
                continue
            }
        }
    }

    return newArray
}

console.log(twoDArray(
    [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]))
