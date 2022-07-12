
const ternary = (item, count) => {
    return count != 1 ? `I have ${count} ${item}s` : `I have ${count} ${item}`
}

const pattern = (num1, num2) => {
    let str = ''
    for (let i = 0; i < num1; i++) {
        if (i % 2 === 1) {
            for (let j = 0; j < num2/2; j++) {
                str = str + "&  "
            }
        } else {
            for (let j = 0; j < num2/2; j++) {
                str = str + "  &"
            }
        }
        str = str + '\n'
    }
    return str
}

console.log(ternary('dog', 3))
console.log(ternary('pig', 1))
console.log(pattern(10,10))