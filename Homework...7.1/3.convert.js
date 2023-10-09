function reverseString(s) {
    try {
        typeof s !== "string"
            s = s.split("").reverse().join("")
        console.log(s);
    } catch (err) {
        console.log("s.split is not a function")
    }

}
let s = 8659
reverseString(s)