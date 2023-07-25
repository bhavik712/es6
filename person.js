//use of spread operator on objects

const person = {
    name:'Rohit',
    age:34
}

const location ={
    city:'Mumbai',
    country : 'India'
}

const personDetails = {
    ...person,
    ...location
}

console.log(personDetails);