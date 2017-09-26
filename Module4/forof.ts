let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2", the keys of the array are the indices of its items
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
