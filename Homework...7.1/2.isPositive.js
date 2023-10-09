function isPositive(num) {
    try {
        if(num >  0) return 'Yes'    
        throw err
    }catch (err) {
               if(num === 0) return 'Zero Error'
               return 'Negative Error'
    }
}

console.log(isPositive(0))