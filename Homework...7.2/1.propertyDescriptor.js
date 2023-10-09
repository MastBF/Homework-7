const obj = {
    set name(arg) {
        this.user = []
       let splited =  arg.split(',')
       splited.forEach(element => this.user.push([element, element.length]))
    },
    get name() {
        return this.user
    }
};
obj.name = "Hamlet, Artavazd"
console.log(obj.name); // [['Hamlet', 6], ['Artavazd', 8]]

