class Immutable {
    constructor(arg) {
        this._user = arg

    }
    get user() {
        return this._user;
    }
    set user(name) {
        throw  Error  
    }



}

let obj = new Immutable('Jack')
obj.user = 'James'
console.log(obj.user)