const persons = [
    {
        name: 'Rohit',
        age: 35,
        city: 'Mumbai'
    },
    {
        name: 'Rahul',
        age: 27,
        city: 'Bangluru'
    },{
        name: 'Virat',
        age: 33,
        city: 'Delhi'
    },{
        name: 'Kishan',
        age: 25,
        city: 'Ranchi'
    }
]
//use of destructuring 
const youngsters = persons.filter(({age})=>age < 30);
console.log(youngsters);

const student = {
    name: 'Axar',
    rollNo : 4,
    grades: 79
}

const findGrade = ({grades}) =>{
    if(grades >= 90 && grades < 100){
        console.log('A');
    }
    else if(grades >= 80 && grades < 90){
        console.log('B');
    }
    else if(grades >= 70 && grades < 80){
        console.log('C');
    }
    else if(grades >= 60 && grades < 70){
        console.log('D');
    }
    else{
        console.log('F');
    }
}

findGrade(student);