const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Pizza is may fav food ever', id: 123523 },
    { text: 'Nice nioce nice', id: 542328 },
];

//Some and Every checks
//1. Is at least one person 19 years old?
// const isAdult = people.some(function(person) {
//     //or const currentYear = (new Date()).getFullYear();
//     if(2018 - person.year > 19){
//         return true;
//     }
// });

//con arrow function
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year > 19) {
        return true;
    }
});

console.log(isAdult);

//2. Is everyone 19?
const areAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year > 19) {
        return true;
    }
});
console.log(areAdult);

//Array.prototype.find()
//Es como filter, pero devuelve sólo el que estás buscando.
//3. Find the comment with ID of 823423

const idFound = comments.find(comment => {
    if(comment.id === 823423) {
        return true;
    }
});
//It's the same that
//comments.find(comment => comment.id === 823423);
console.log(idFound);

//Array.prototype.findIndex()
//Encuentra el lugar donde está (la posición en el array)
//4. Delete the comment with the id 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//For deleting
// comments.splice(index, 1);
// console.table(comments);

//Other way
const newComments = [
    ...comments.slice(0, index), //Va de la posición 0 al index
    ...comments.slice(index + 1) //Va del index hasta el final
];
console.table(newComments);