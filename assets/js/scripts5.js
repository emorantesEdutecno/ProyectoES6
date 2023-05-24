//ES5
var multiplica = function(x,y){
    return x*y;
}

//ES6
let multiplica2 = (x,y)=>{
    return x*y;
}

const multiplica3 = (x,y)=>x*y;



console.log(multiplica(5,4));
console.log(multiplica2(5,4));
console.log(multiplica3(5,4));