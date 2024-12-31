// Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista);

console.log(typeof lista)

const itens = ["Matheus", true, 2, 4.12, []];

console.log(itens);

//Mais sobre Arrays
const arr = ["a", "b", "c", "d", "d"]

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[83]);


//Propriedades

const numbers = [5, 3, 4]

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.lenght)

//Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers);

const text = "algum texto"

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

//Objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
};

console.log(person)

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

//Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "vw",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

//Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2);

console.log(obj)

//Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car))

//Mutação
const a = {
    name: "Matheus"
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

//Loops em arrays
const users = ["Matheus", "João", "Pedro", "Miguel"]

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

//Push e Pop
const array = ["a", "b", "c"]

array.push("d");

console.log(array);

console.log(array.length);

array.pop()
console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array)

//Shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z")

console.log(letters);

//indexOf e lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElments.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])

console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.IndexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

//Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(2);

console.log(subArray3);

//Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);

});

const posts = [

    {
        title: "Primeiro post",
        category: "PHP"
    },
    {
        title: "Primeiro post",
        category: "PHP"
    },
    {
        title: "Primeiro post",
        category: "PHP"
    },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
})

//Includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW !");
}

//Reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTeste.reverse();

console.log(reverseTest);

//Métodos String

//Trim
const trimTest = " testando \n ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

//Padstart
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0")

console.log(padEnd)

//split
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

// join
const fraseDenovo = arrayDaFrase.join(" ")

console.log(fraseDenovo)

const itensParaComprar = ("Mouse", "Teclado", "Monitor")

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.joint(" , ")}`

console.log(fraseDeCompra)

// Repeat

const palavra = "Testando"

console.log(palavra.repeat(5))

// Rest Operator

const somaInfinita = (...args) => {

    let total = 0

    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }

    return total;
}

console.log(somaInfinita(1,2,3))

console.log(somaInfinita(1, 20, 34, 3424, 128812, 127323, 12 , 23, 54))

//Estrutura for of

const somaInfinita2 = (...args) => {

    let total = 0

    for(num of args){
        total += num
    }

    return total
}

console.log(somaInfinita2(1,2,4))

console.log(somaInfinita2(5,6,1,23,5,6,3,5))

// destructuring em objetos

const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador"
}

const{firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

//renomear variaveis
const{ firstName: primeiroNome} = userDetails

console.log(firstName)

// destructuring em arrays

const myList = ["Avião", "Submarino", "Carro"]

const[veiculoA, veiculoB,veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// JSON

const myJson = '{"name": "Matheus", "age": 31, "skills":["PHP", "JavaScript", "Python"]}';

console.log(myJson)

//Conversão em Json

const myObject = JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

//json invalido

const badJson = '{"name": Matheus, "age":31}'

//const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)