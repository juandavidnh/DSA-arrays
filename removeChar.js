function removeChars(string, chars){
    let restrictedChars = []
    let newString = ""

    for(let i = 0; i < chars.length; i++) {
        restrictedChars.push(chars.charAt(i))
    }

    for(let j = 0; j < string.length; j++){
        if(restrictedChars.includes(string[j])) {
            continue
        } else {
            newString = newString.concat(string[j])
        }
    }

    return newString
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))