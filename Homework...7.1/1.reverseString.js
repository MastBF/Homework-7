
function reversString(s) {
    try {
        return s.split('').reverse().join('')
    }catch (error) {
         console.log ('Error')
         return s
    }
}


let s = 1234

console.log(reversString(s))
