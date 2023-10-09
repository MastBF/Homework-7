let obj = {
    user: 'james',
    age:32
}

let obj2 = {
}
Object.defineProperty(obj, 'age', {
    value:42,
    writable:false
})


for(let [key,value] of Object.entries(obj)) {
    function copyFn() {
        obj2[key] = value
        
    }
    copyFn()
    console.log(value)
}

// console.log(obj2)
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))