// const scores = [70,85,92]
// console.log(scores[0])
// console.log(scores[1])
// console.log(scores[2])
// console.log(scores.length)
//
//
// const queue = ["ada","tunde"];

// const q = ["ada","tunde"]
// q.push("zainab")
// console.log(q.shift());
// q.unshift("ife")
// console.log(q.pop())
// console.log(q)

// const names = ["ada","tunde","olu"]
// console.log(names.indexOf("yusuf"))
// console.log(names.includes("yusuf"))
//
// const scores = [70, 85, 95];
// for(let count = 0; count < scores. length; count ++){
//     console.log(scores[count] + 1);
// }
//
// for (const score of scores){
//     console.log(score * 2);
// }

// const a = ["ada","tunde"]
// const copy = [...a]
// copy.push("zainab")
// console.log(a)
// console.log(copy)
// const same = a
// console.log(same === a, copy === a)


//Number 1

//

// const student = {name:"ada",age:19,program:"python"}
// console.log(student.name,student.age,student.program)
// console.log(student.age)
// console.log(student.program)
//

// function in object
// const student = {name:"ada",greet(){
//     console.log("Hi, I am" +" "  + student.name);
//     }
// }
//
// student.greet()
// //console.log(typeof student.greet)

//Arrays of Objects
// const students = [{name:"ada",score:99},{name:"Tunde",score :72}]
// console.log(students[1].name)
// for(const s of students){
//     console.log(s.name + " " + s.score)
// }

//object.keys and object.entries

// const marks = {math: 80,english: 65}
// console.log(Object.keys(marks))
// console.log(Object.values(marks))
// console.log(Object.entries(marks))
//
// for(const [subject, mark] of Object.entries(marks)){
//     console.log(subject + " : " + mark)
// }

//comparing object | stringify, === compares reference not contents
// const a = {x :1}
// const b = {x :1}
// const c = a
// console.log(a === b)
// console.log(a === c)
// console.log(JSON.stringify(a) === JSON.stringify(b))

//exercise 2
//return students scores 80 or more from an array of objects
// object.countWords(["a","b","a"]) gives
//deepEqual({a:{b:1}},{a:{b:1}})

//solution
// 1
// const studentsList = [
//     { name: "ada", score: 99 },
//     { name: "Tunde", score: 72 },
//     { name: "John", score: 85 }
// ];
//
// const highScorers = studentsList.filter(student => student.score >= 80);
// console.log(highScorers);

// 2

// function countWords(arr) {
//     const counts = {};
//     for (const word of arr) {
//         counts[word] = (counts[word] || 0) + 1;
//     }
//     return counts;
// }
//
// console.log(countWords(["a", "b", "a"]));

// 3

// function deepEqual(obj1, obj2) {
//
//     if (obj1 === obj2) return true;
//
//     if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
//         return false;
//     }
//
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//
//     if (keys1.length !== keys2.length) return false;
//
//     for (const key of keys1) {
//         if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(deepEqual({a: {b: 1}}, {a: {b: 1}}));
// console.log(deepEqual({a: 1}, {a: 2}));









