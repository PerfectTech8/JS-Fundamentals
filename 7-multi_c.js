
const arg = process.argv[2];
const count = parseInt(arg);

if(isNaN(count)) {
    console.log("Missing number of occurrences");
}else{
    for(let i = 0; i < count; i++){
        console.log("C is fun");
    }
}


















// const arg = process.argv[2];
// const count = parseInt(arg, 10);

// if (isNaN(count)) { 
//     console.log("Missing number of occurrences");
// }else {
//     const messages = Array(count).fill("C is fun");
//     for (const msg of messages) {
//         console.log(msg);
//     }
// }







// const arg = process.argv[2];
// const x = parseInt(arg, 10);

// if (isNaN(x)) {
//     console.log("Missing number of occurrences");
// }else{
//     for(let i = 0; i < x; i++){
//         console.log("C is fun");
//     }
// }