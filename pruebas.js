import bcrypt from "bcrypt";


const xsalt = 10;
const pass  = "HolaTito"
const pass1  = "holaTito"

const hash = await bcrypt.hash(pass, xsalt).then(function(hashed){
    return hashed
});
console.log(hash);


const comparo = await bcrypt.compare(pass, hash).then(function(comparado){
    return comparado
});

console.log(comparo);

 