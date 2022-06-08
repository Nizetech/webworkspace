const data = {
    ticker: [{ name: 'John', age: 30 }, { name: 'Mary', age: 28 }]
}

JSON.parse(data)
const parsedData = JSON.parse(data).ticker.name
console.log(parsedData)