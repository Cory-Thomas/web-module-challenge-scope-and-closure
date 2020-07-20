// Stretch 2 

function createBase( base ){
    return function (num){
        return base + num;
    }
}

let addSix = createBase(6);
console.log( addSix(10) );
console.log( addSix(21) );