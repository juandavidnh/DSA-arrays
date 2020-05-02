function products(array) {
    let productArray = []

    for(let i=0; i < array.length; i++) {
        let productItem = 1

        for(let j=0; j < array.length; j++) {
            if(i === j){
                continue
            } else {
                productItem *= array[j]
            }
        }

        productArray.push(productItem)
    }

    return productArray
}

console.log(products([1, 3, 9, 4]))