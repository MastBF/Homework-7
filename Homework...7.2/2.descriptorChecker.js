let user = {
  name: "John",
  age: 31
};
Object.defineProperty(user, 'age', {
  value: 23,
  enumerable: false
})

function descriptorCheckerde(obj, writ, enume, conf) {
  let newObj = {}
  for (let key of Object.keys(obj)) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (descriptor.writable == writ
      && descriptor.enumerable === enume
      && descriptor.configurable === conf) newObj[key] = obj[key]
  }
  return newObj
}


console.log(descriptorCheckerde(user, true, true, true))




