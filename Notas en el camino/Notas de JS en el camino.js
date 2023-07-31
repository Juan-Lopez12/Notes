

//^ ----------------------------------- 
//^ -     Notas de JS en el camino    - 
//^ ----------------------------------- 


//^ ----- ----- 1.- usar number('string') para convertir un string a numero ----- ----- 



//^ ----- ----- 2.- usar Object.entries('objeto') para que nos devuelva un array de arrays, el sub-array tendra la clave y el valor ----- ----- 

//^ ----- ----- 2,1.- podemos usar un map o un foreach(([key, value]) => {}) para recorrer el array inicial, destructurar el sub-array y devolver sus valores y claves ----- ----- 



//^ ----- ----- 3.- usar .slice(-1) para obtener el ultimo caracter de un array, y usar .slice(0, -1) para eliminarlo ----- ----- 

//^ ----- ----- 3,1.- podemos usar array.length = 5, para recortar el arreglo inicial, asi solo mostrara los primeros 5 elementos en el arreglo ----- ----- 



//^ ----- ----- 4.- usar / / para encerrar una expresión regular. Ejemplo: "/[*/+-]/" ----- ----- 



//^ ----- ----- 5.- podemos usar el metodo expReg.exec('array') junto con una expresion regular antes del metodo y el array como parametro y nos devolvera un array con los caracteres que tengamos en la expresion regular y su posición  ----- ----- 

//^ ----- ----- 5,1.-    .exec() ----- ----- 



//^ ----- ----- 6.- podemos usar tiempo relativo con la API de JS: const variable = new Intl.RelativeTimeFormat("es") con el texto en español ----- ----- 

//^ ----- ----- 6,1.- y con variable.format(-10, "minutes") nos devolvera un texto diciendo "dentro de 10 minutos", se puede aplciar para segundos, horas, semanas etc  ----- ----- 

//^ ----- ----- 6,2.- si le pasamos un numero negativo nos devolvera "hace 10 minutos" ----- ----- 



//^ ----- ----- 7.- usar beta.reactjs.org para encontrar mejor documentación de react ----- ----- 


//^ ----------------------------------- 
//^ - FORMAS DE CREAR OBJETOS - 
//^ ----------------------------------- 


//^ ----- ----- 8.- hay 5 formas de crear objetos ----- ----- 

//^ ----- ----- 8,1.- con el constructor de objeto new: const miObj = new Object(); ----- ----- 

//^ ----- ----- 8,2.- con el literal de objetos, inicializador, object literal: ----- ----- 

//* const miObj = {
//*     tittle: "Aprendiendo JavaScript",
//*     pages: 100
//* }

//^ ----- ----- 8,3.- utilizando una función constructora: ----- ----- 

//* function MiObjeto (name) {
//*     this.name = name;
//* }

//* const miObj = new MiObjeto("Carlos");

//^ ----- ----- 8,4.- utilizando las clases de ES6+ ----- ----- 

//* class MiObjeto {
//*     constructor(name) {
//*         this.name = name;
//*     }
//* }

//* const miObj = new MiObjeto("carlos");

//^ ----- ----- 8,5.- o usando el patrón "singleton" asegurandonos de que el objeto solo se instancia 1 sola vez ----- ----- 

//* const singl = new (function Singleton() {
//*     this.name = "Carlos"
//* });





//^ ----- ----- 9.- Una manera para ordenar un arreglo de forma aleatoria seria usando: ----- ----- 

//* console.log(arreglo.sort(function(){
//*     return math.random() - 05;
//* }));



//^ ----- ----- 10.- podemos usar "!!" para convertir a booleano. Si el valor es 0, null, una cadena vacia, undefined, o NaN, va a retornar "false", si es diferente regresara "true" ----- ----- 



//^ ----- ----- 11.- texto.replace("Juan", "Pedro") solo cambia la primera ocurrencia que encuentra, pero podemos usar expresiones regulares para que reemplace todas las ocurrencia que encuentre. usando por ejemplo: texto.replace(/Juan/g, "Pedro") ----- ----- 



//^ ----- ----- 12.- Si usamos elementos = document.querySelectorAll("div") nos traera una nodeList con todos los elementos, si queremos convertirlo a un "array" para manipularlo podemos usar "Array.from(elementos)" y asi el resultado sera un array ----- ----- 



//^ ----- ----- 13.- Usar innerHTML o textContent para tomar el texto de un elemento HTML ----- ----- 



//^ ----- ----- 14.- Un truco para cambiar el titulo de una pagina al cambiar depestaña seria:  ----- ----- 

//* let previousTitle = document.title;

//* window.addEventListener('blur', () => {
//*     previousTitle = document.title;
//*     document.title = "¡No te vayas! ¡Vuelve!"
//* })

//* window.addEventListener('focus', () => {
//*     document.title = previousTitle
//* })



//^ ----- ----- 15.- Para obtener datos de una URL de forma sencilla podemos usar el objeto de tipo url con: ----- ----- 

//* const url = "aqui la url"

//* const urlObject = new URL(url);

//* console.log(urlObject.host)
//* console.log(urlObject.protocol)
//* console.log(urlObject.pathname)
//* console.log(urlObject.searchParams.get("nombre"))
//* console.log(urlObject.searchParams.get("trabajo"))



//^ ----- ----- 16.- Podemos asignar claves y valores dinamicos a un objeto usando: ----- ----- 

//* const obj = {};
// const key = "dynamicKey";
// const value = "dynamicValue";

// obj[key] = value;

// console.log(obj);



//^ ----- ----- 17.- Podemos usar data- en html y asignarle palabras, y luego hacer comprobaciones en JavaScript usando ".dataset.palabra" ----- ----- 



//^ ----- ----- 18.- podemos usar PromisedAllSettled para resolver varias promesas al mismo tiempo ----- ----- 



//^ ----- ----- 19.- para hacer cosas de manera asincrona usamos "await" (y si usamos una url/key escribimos "fetch('') ") al lado a la solicitud que estemos esperando, lo encerramos en una función asincrona usando "async", y encerramos la resolve en un bloque "try", y el error en un bloque "catch"  ----- ----- 


//* async function fetchingData() {
//     try {
//         const datosFetched = await getDatos();
//         const respuesta = await fetch('aqui la URL de datos');

//         console.log(datosFetched);
//         console.log(respuesta);
//     } catch (err) {
//         console.log(err.message)
//     }
// };

//* fetchingData();



//^ ----- ----- 20.- podemos utilizar document.querySelector("") para recoger un elemento del DOM, y usar document.querySelectorAll("") para recoger varios/todos los elementos, encontradolos usando los selectores de clases de CSS ----- ----- 


// document.querySelectorAll(".container #caja1")



//^ ----------------------------------- 
//^ -       RECORRER UN OBJETO        - 
//^ ----------------------------------- 


//^ ----- ----- 21.- Podemos usar Object.keys() para obtener un array con las claves del objeto ----- ----- 

//^ ----- ----- 22.- podemos usar Object.values() para obtener los valores del objeto ----- ----- 

//^ ----- ----- 23.- y usar Object.entries() para que nos devuelva un array con la key y el value ----- ----- 

//* let perro = {
//     nombre: "Scott",
//     color: "Negro",
//     macho: true,
//     edad: 5
//     };

// Object.entries(perro).forEach(([key, value]) => {
//     console.log(value)
// });


//^ ----------------------------------- 
//^? -      METODOS DE ARRAYS         - 
//^ ----------------------------------- 


//* const posts = [{
//     id: 1,
//     title: "Mi primer post",
//     tags: ["javascript", "webdevelopment"],
// }, {
//     id: 2,
//     title: "Mi experiencia con React",
//     tags: ["javascript", "webdevelopment", "react"],
// }, {
//     id: 3,
//     title: "Por qué dejé Angular",
//     tags: ["javascript", "webdevelopment", "angular"],
// }];


//^ ----- ----- 24.- podemos usar .find() y dentro una función de call back para encontrar una palabra o frase dentro de un array ----- ----- 


posts.find(post => post.title === 'Por que dejé Angular');

posts.find(post => post.id === 1);


//^ ----- ----- 25.- podemos usar .some() para preguntar si existe o no lo que estemos buscando, nos devolvera true o false ----- ----- 


posts.some(post => post.id === 4);


//^ ----- ----- 26.- con .includes() podemos ver si existe cierta palabra en un array ----- ----- 


posts.some(post => post.tags.includes("React"));


//^ ----- ----- 27.- .every() vendria siendo lo contrario a .includes() esta va a verificar si existe la coincidencia en todas partes ----- ----- 


posts.every(post => post.tags.includes("javascript"));


//^ ----- ----- 28.- con .map() podemos usarlo como si fuera un bucle for, pero de manera declarativa. Map tambien te puede regresar un arreglo nuevo para guardarlo en una variable ----- ----- 


posts.map(post => post.title);


//^ ----- ----- 29.- .filter() va a darnos un array con lo que le filtremos ----- ----- 


posts.filter(post => post.tags.includes("angular"));

posts.filter(post => post.image !== undefined);
posts.filter(post => post?.image);



//^ ----- ----- 30.- podemos utilizar .reduce() para crear un array que incluya todas las etiquetas que estamos utilizando ----- ----- 


posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags];
}, []);


//^ ----- ----- 31.- si no queremos que los resultados esten repetidos en un array podemos utilizar new Set ----- ----- 


posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]));
}, []);


//^ ----- ----- 32.- "color-scheme" es una propiedad css que cambiara el modo de un elemento a claro u oscuro, podemos usarlo en el ":root" o en un elemento en especifico para modo oscuro ----- ----- 


//^ ----- ----- 33.- "crypto.randomUUID()" metodo nos devolvera un UUID unico, sin usar librerias ----- ----- 

const uuid = crypto.randomUUID()


//^ ----- ----- 34.- "Object.freeze()" hara que un objeto no sea mutable ----- ----- 


const obj = Object.freeze({
    name: "Juan",
    age: 21,
})

Object.freeze(obj)


//^ ----- ----- 35.- "new formData()" para guardar datos de un formulario ----- ----- 

const formElement = document.querySelector("form");
const formData = new FormData(formElement);


//^ ----- ----- 36.- "New set" funciona como un objeto, podemos usarlo para guardar datos en un formato "key, value", y tampoco acepta valores repetidos, por lo que puede ser muy util para verificar si un elemento esta repetido o no con: .size ----- ----- 

const numbers = ["1", "3", "3", "4"]
const numbersSet = new Set(numbers)
if (numbers.length !== numbersSet.size) console.log("Hay repetidos")

const hasDuplicates = (array) =>
    new Set(array).size < array.length


//^ ----- ----- 37.- "Array.flat(infinity | 2)" para aplanar arrays, tambien le podemos indicar las veces que debe aplanar ----- ----- 

//^ ----- ----- 37,1.- "Array.flatMap" mapea un array y luego lo aplana ----- ----- 


//^ ----- ----- 38.- ".length = 2" puede funcionar como setter, podemos acortar un array asignandole un número, tambien podemos alargarlo y quedaran como <x empty items> ----- ----- 

const array = [2, 4, 6, 8, 10]
array.length = 2
console.log(array)


//^ ----- ----- 38.- "New URLPattern()" para hacer match sobre rutas para saber si existen o no ----- ----- 


//^ ----- ----- 39.- "Intl.ListFormat('en').format(array)" para listar un array y que el ultimo elemento tenga su respectiva traducción (y | and, etc), tambien podemos cambiar si queremos que sea un "y" o un "o" ----- ----- 

//^ ----- ----- 39,1.- "Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(array) ----- ----- 


//^ ----- ----- 40.- "PARAMETROS NOMBRADOS" podemos usar la destructuración para pasarle parametros nombrados a una función, la función solo aceptara el nombre estrictamente si existe dentro del objeto que le pasamos, tambien podemos crear el objeto como argumento al momento de llamar la función, asi no importara el nombre y no importa si no pasamos todas las propiedades del objeto ----- ----- 

const createGodzilla = ({ color, material = metal, weight = 200, sound, power }) => {
    // ...
}

const godZillaParams = {
    color: "blue",
    material: "plastic",
    sound: "GROARRR",
    powers: ["lighting", "nuclear bomb"]
}

createGodzilla(godZillaParams)

createGodzilla({
    color: "blue",
    material: "plastic",
    sound: "GROARRR",
    powers: ["lighting", "nuclear bomb"]
})


//^ ----- ----- 41.- "DICCIONARIOS o HASH TABLE (objetos)" al usar un IF y evitando el uso de SWITCH podemos usar diccionarios ----- ----- 

const adversario = "Hulk"
// ✅
// tambien podemos añadir metodos o que sea cualquier tipo de datos que queramos
const LOKI_DISFRACES = {
    Thor: "Odin",
    "Iron-Man": "Magneto",
    Hulk: () => "Thanos",
    Wolverine: 'Magneto' // añadiendo uno nuevo
}
// ✅

const LOKI_DEFAULT_DISFRAZ = 'Loki'

const lokiFunc = LOKI_DISFRACES[adversario]
    ? LOKI_DEFAULT_DISFRAZ[adversario]()
    : LOKI_DEFAULT_DISFRAZ

const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ
console.log(loki)

// ❌
let lokiIfElse = ''
if (adversario === 'Iron-Man') {
    lokiIfElse = 'Magneto'
} else if (adversario === 'Hulk') {
    lokiIfElse = 'Thanos'
} else {
    lokiIfElse = 'Loki'
}
// ❌


//^ ----- ----- 42.- "window.scrollTo()" para mandar a scrollear a una parte de la pagina por coordenadas o a un elemento en especifico capturado por su ID, podemos decirle si sera smooth o o instant ----- ----- 


//^ ----- ----- 43.- "location.origin" nos devolvera el dominio de la pagina ----- ----- 


//^ ----- ----- 44.- "new URL(url, base)" para capturar o guardar una URL, tambien podemos usar "event.destination.url" para para capturar una url en un evento 'navigate' ----- ----- 


//^ ----- ----- 45.- "event.intercept()" ----- ----- 


//^ ----- ----- 46.-  ----- ----- 