const { users, colours } = require('./users')

// question 1
const usersEmail = users.map(item => item.email)
console.log(colours.fg.magenta,`1.Email of users:`)
console.log(usersEmail)

// question 2
const iranianUsers = users.filter(item => item.country === "Iran")
const usersName = iranianUsers.map(item => `${item.firstName} ${item.lastName}`)
console.log(colours.fg.magenta,`2.FirstName and LastName of Iranian users:`)
console.log(usersName)

// question 3
const genderUnknown = users.filter(item => item.gender != "Female" && item.gender != "Male")
const moneyOfGenderUnknown = genderUnknown.map(item => item.money)
console.log(colours.fg.magenta,`3.Money of users with unknown gender:`)
console.log(moneyOfGenderUnknown)

// question 4
const americanUsers = users.filter(item => item.country === "United States" && Number(item.money.replace('$', '')) > 1500)
const americanUsersEmail = americanUsers.map(item => item.email)
console.log(colours.fg.magenta,`4.Money of US users:`)
console.log(americanUsersEmail)

// question 5
const frenchUsers = users.filter(item => item.country === "France")
const moneyOfFrenchUsers = frenchUsers.map(item => Number(item.money.replace('$', '')))
const desNum = moneyOfFrenchUsers.sort((a, b) => a - b)
console.log(colours.fg.magenta,`5.Money of French users:`)
console.log(desNum)

// question 6
const emailLength = users.filter(item => item.email.length > 30)
const usersNameEmailLength = emailLength.map(item => `${item.firstName} ${item.lastName}`)
console.log(colours.fg.magenta,`6.Email lenght > 30 :`)
console.log(usersNameEmailLength)

// question 7
const endOfEmail = users.filter(item => item.email.endsWith("edu"))
const moneyOfEduEmail = endOfEmail.map(item => item.money)
console.log(colours.fg.magenta,`7.Money of users with "edu" email:`)
console.log(moneyOfEduEmail)

// question 8
const countedFemale = users.reduce((acc, curr) => {
    if (curr.gender === "Female") {
        return acc + 1
    }
    return acc;
}, 0)
console.log(colours.fg.magenta,`8.Count of Female users:`)
console.log(countedFemale)

// question 9
const filteredMale = users.filter(item => item.gender === "Male")
const sumMoney = filteredMale.reduce((group, money) => {
    const newkey = Number(money["money"].replace('$', ''))
    return group + newkey
}, 0)

console.log(colours.fg.magenta,`9.Amount of money of Male users:`)
console.log(sumMoney)

// question 10
const averageFrenchMoney = moneyOfFrenchUsers.reduce((acc, curr) => {
    return (acc + curr) / moneyOfFrenchUsers.length;
}, 0)

console.log(colours.fg.magenta,`10.Average money of French users:`)
console.log(averageFrenchMoney)

// question 11
const countryNameOfUsers = users.reduce((group, curr) => {
    let newkey = curr["country"]
    if (!group[newkey]) {
        group[newkey] = []
    }
    group[newkey].push(curr)
    return group
}, [])

console.log(colours.fg.magenta,`11.Grouping users by Country:`)
console.log(countryNameOfUsers)

// question 12
const genderOfUsers = users.reduce((group, curr) => {
    let newkey = curr["gender"]
    if (!group[newkey]) {
        group[newkey] = []
    }
    group[newkey].push(curr)
    return group
}, [])

console.log(colours.fg.magenta,`12.Grouping users by Gender:`)
console.log(genderOfUsers)

// question 13
const nameOfUsers = users.reduce((group, curr) => {
    let newkey = curr["firstName"]
    if (!group[newkey]) {
        group[newkey] = []
    }
    group[newkey].push(curr)
    return group
}, [])

console.log(colours.fg.magenta,`13.Grouping users by FirstName:`)
console.log(nameOfUsers)