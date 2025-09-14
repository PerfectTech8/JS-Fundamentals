
// const forCoding = function(){
//     console.log("No argument");
// }
// forCoding();

//  const forSchool = function(name){
//      console.log("Argument found");

// }
// forSchool("Best");

//  const forFront = function(name, where, vehicle){
//      console.log("Arguments found");

//  }
//  forFront("Best", "School", "Benz");

//forCoding();
//forSchool("Best");


// const args = process.argv.slice(2);
// if (args.lenght === 0){
//     console.log("No argument");

// }else if (args.lenth === 1){
//     console.log("Argument found")

// }else if (args.lenghth === 3){
//     console.log("Arguments found")
// }




if (process.argv.length < 3){
    console.log("No argument");
}
if(process.argv.length === 3){
    console.log("Argument found");
}
if(process.argv.length > 3){
    console.log("Arguments found");
}
