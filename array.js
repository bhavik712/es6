const persons = [
    {
        name: 'Rohit',
        age: 25
    },
    {
        name: 'Rahul',
        age:23
    }
]

const locations = [
    {
        city: 'Mumbai',
        country: 'India'
    },
    {
        city: 'Banglore',
        country:'India'
    }
]

const details = [
    {
        ...persons,
        ...locations
    }
]

console.log(details);