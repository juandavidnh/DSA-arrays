function urlify(string){
    let arrayString = string.split('')
    let urlArray = []

    for(let i=0; i < arrayString.length; i++){
        if(arrayString[i] === ' '){
            urlArray.push('%20')
        } else {
            urlArray.push(arrayString[i])
        }
    }

    return urlArray.join('')
}

console.log(urlify('www.thinkful.com /tauh ida parv een'))