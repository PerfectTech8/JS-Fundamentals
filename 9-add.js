
function add(a, b){
    return a + b;
}

const args = process.argv.slice(2);

const first = parseInt(args[0]);
const second = parseInt(args[1]);

if (isNaN(first) || isNaN(second)) {
    console.log('NaN');
}else{
    console.log(add(first, second));
}