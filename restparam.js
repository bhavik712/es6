const printTeam = (teamName, coachName, ...players)=>{
    console.log(`Team:- ${teamName}`);
    console.log(`Coach:- ${coachName}`)
    console.log('Players List');
    players = [...players, 'Ashwin'];
    players.forEach((playerName)=>{
        const index = players.indexOf(playerName) + 1
        console.log(`${index}. ${playerName}`);
    })
    
}

printTeam('CSK','Fleming','MSD','Raina','Faf','Jaddu','Rutu');

//converstion from string to array of chars 

const name1 = 'Bhavik';

//1.By using method:
const nameLetters = name1.split('');
console.log(nameLetters);
const name2 = 'Khushi';
//2.By using spread operator 
const chars = [...name2];
console.log(chars);