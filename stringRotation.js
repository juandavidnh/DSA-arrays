function stringRotation(str1, str2) {
    if(str1.length !== str2.length){
        return false
    }

    let rotationsArray = []
    let rotation = str1

    for(let i = 0; i < str1.length; i++) {
        let firstChar = rotation[0]

        rotation = rotation.substring(1)
        rotation = rotation.concat(firstChar)

        rotationsArray.push(rotation)
    }

    return rotationsArray.includes(str2)
}

console.log(stringRotation('amazon', 'azonma'))