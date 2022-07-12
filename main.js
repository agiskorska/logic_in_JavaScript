function ageCheck(people){
    for (let person of people) {
        if(person.age < 18) {
            return true
        }
    }
    return false
};

function over18s(people) {
    const arr = []
    for (let person of people) {
        if(person.age > 18) {
            arr.push(person)
        }
    }
    return arr
}

function crecheRoster(people){
    const arr = []
    for (let person of people) {
        if(person.age <= 12) {
            arr.push(person.name)
        }
    }
    return arr};

function cumulativeAge(people){
    let total = 0
    for (let person of people) {
        total += person.age
        console.log(total)
    }
    return total
}

cumulativeAge([
    { name: "Elowen", age: 8 },
    { name: "Artemis", age: 12 },
    { name: "Trifun", age: 16 },
    { name: "Beti", age: 33 },
    { name: "Aki", age: 30 }
])

module.exports = { ageCheck, over18s, crecheRoster, cumulativeAge }