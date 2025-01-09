// let obj = {
//     a:1,
//     b:"Kshitij"
// }

// console.log(obj);

// let animal ={
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal;

class Animal
{
    constructor(name)
    {
        this. name = name;
        console.log("object is created");
    }
    
    get name()
    {
        return this._name;
    }

    set name(value)
    {
        if (value.length < 4)
        {
            console.log("name is too short");
            return;
        }
        this._name = value;
    }

    eats()
    {
        console.log("Kha rha hu");
    }
    jumps()
    {
        console.log("kood rha hu");
    }
}

class Lion extends Animal
{
    constructor(name)
    {
        super(name);
        console.log("Object is created and it is Lion")
    }
    eats()
    {
        super.eats();
        console.log("Kha raha hu roar");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

console.log(l.name); // Shera

// l = new Lion(""); // name is too short
l.name = "";