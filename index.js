const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")
}
destructivelyAppendCat("Ralph");
console.log(cats);



function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
destructivelyPrependCat("Bob");


function destructivelyRemoveLastCat(name){
    cats.pop();
}
destructivelyRemoveLastCat("Bob");


function destructivelyRemoveFirstCat(name){
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    const caty=[...cats,name]
    return caty;
}

function prependCat(name){
    const caty2=[name,...cats];
    return caty2;
}

function removeFirstCat(){
    const caty3=cats.slice(1);
    return caty3;
}

function removeLastCat(){
    const caty3=cats.slice(0,-1);
    return caty3;
}

