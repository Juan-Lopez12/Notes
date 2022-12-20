

//^ ----- ----- Notas de JavaScript ----- ----- 


//^ ----------------------------------- 
//^ -     IMPORTANTES/OBLIGATORIOS    - 
//^ ----------------------------------- 


//^ ----- ----- JavaScript es un lenguaje de programación interpretado, orientado a objetos, imperativo (que se ejecuta paso por paso, de linea en linea desde arriba), case sensitive, basado en prototipos / instancias /classless, de tipado debil, lenguaje dinámico y esta constrido sobre la tecnologia ECMASCRIPT ----- ----- 


//^ ----------------------------------- 
//^ -            VARIABLES            - 
//^ ----------------------------------- 


//^ ----- ----- 0.- Una variable es un espacio que guardamos en memoria, va acompañado de un nombre y un valor el cual sera un dato ----- ----- 


recipiente = "papel";


//^ ----- ----- 1.- hay diferentes tipos de datos, como: string, numero y booleano ----- ----- 


string = "cadena de texto";

numero = 19;

booleano = true;


//^ ----- ----- 2.- hay casos especiales de datos, los cuales son: undefined, null y NaN ----- ----- 

//^ ----- ----- 3.- las variables se deben declarar y para ello hay 3 formas: var, let y const ----- ----- 

//^ ----- ----- 3,1.- let nos limita el alcanze al bloque donde la ejecutamos (SCOPE de javascript) ----- ----- 


let ventana = "cristal"


//^ ----- ----- 3,2.- var tiene alcanze grobal, pudiendose usar desde donde sea (no recomendado) ----- ----- 


var aire = "oxigeno"


//^ ----- ----- 3,3.- const funciona igual que let, pero el valor de const NUNCA va a cambiar y siempre sera el mismo, solo se inicializara una vez (si se intenta cambiar su valor va a tirar error) ----- ----- 


const nombreConst = "Juan";

// nombre = "Lopez";


//^ ----- ----- 4.- Declarar una variable consistira de usar var, let o const para declarar su alcance seguido del nombre de la variable y luego su valor, si no se añade valor se declarara igual pero tirará undefined ----- ----- 

//^ ----- ----- 5.- undefined es un tipo de dato que nos dice que la variable existe pero que no tiene valor (no esta inicializada) ----- ----- 

//^ ----- ----- 6.- inicializar seria darle un valor a una variable ----- ----- 

//^ ----- ----- 6,1.- const debe ser declara e inicializada al mismo tiempo o no funcionara ----- ----- 

//^ ----- ----- 7.- podemos declarar multiples variables seguidas al mismo tiempo separandolas con coma ----- ----- 


let numero1Declarar = 23, numero2Declarar = 39, numero3Declarar = 41;


//^ ----- ----- 8.- El HOISTING es un concepto, donde si llamamos a una variable antes de crearla nos tirará error o undefined, pero con las funciones no funcionara asi, done podremos llamar a una función antes de crearla y funcionara con normalidad ----- ----- 

//^ ----- ----- 9.- null significa que la variable esta vacia o nula (intencionalmente) ----- ----- 

//^ ----- ----- 10.- NaN es un tipo de error que singifica "Not a Number" ----- ----- 

//^ ----- ----- 11.- prompt() es una de las api de javascript donde nos permitira darle un dato (prompt es una funcion) ----- ----- 

//^ ----- ----- 11,1.- podemos guardar el valor que le demos a prompt() declarando una variable y luego utilizando prompt ----- ----- 


// let nombrePrompt = prompt("Decime tu nombre");

// document.write( "Hola! " + nombrePrompt);


//^ ----------------------------------- 
//^ -      OPERADORES EN JAVASCRIPT   - 
//^ ----------------------------------- 


//^ ----- ----- 12.- Un operador de asignación resume el codigo para operar una ecuación con su simbolo acompañado del igual = ----- ----- 

//^ ----- ----- 12,1.- ejemplo: "x += y" va a dar como resultado "x + y", evitando escribir "x = x + y" ----- ----- 

//^ ----- ----- 12,2.- los operadores son: x = y,   x += y,   x -= y,   x *= y,   x /= y,   x %= y,   x **= y, (otras no muy usadas:  x <<= y,   x >>= y,   x >>>= y,   x &= y,   x ^= y,   x |= y)  ----- ----- 


let numero1Operador = 10;

numero1Operador += 2;

document.write(numero1Operador);


//^ ----- ----- 13.- los operadores aritméticos son:   +,   -- (decremento),   /,   **,   ++ (incremento),   *,   %,   -,    ----- ----- 


let numero1Arimetico = 8;

numero1Arimetico++;

document.write(" <br /> <br /> ", numero1Arimetico);


//^ ----------------------------------- 
//^ -          CONCATENACIÓN          - 
//^ ----------------------------------- 


//^ ----- ----- 14.- La concatención consiste en unir 2 o mas strings, dando un una frase como resultado ----- ----- 

const saludoConcat = "¡Hola Pedro! ";

const preguntaConcat = "¿Como estás?";

const fraseConcat = saludoConcat + preguntaConcat;

document.write("<br /> <br />", fraseConcat);


//^ ----- ----- 14,1.- para concatenar numeros hay que pasarlos primero a string ----- ----- 

//^ ----- ----- 14,2.- si sumamos numeros pero le añadimos un string vacio pasara los numeros automaticamente a texto ----- ----- 


const numero1Concat = 5;

const numero2Concat = 8;

const fraseNumeroConcat = "" + numero1Concat + numero2Concat;

document.write(" <br /> <br />", fraseNumeroConcat);


//^ ----- ----- 15.- usar el metodo de cadena ".concat" para concatenar strings, no funcionara en numeros, se le debe aplicar si o si a un string. El argumento que le pasamos si peude ser un número  ----- ----- 


const numero3Concat = "3";

const frase2NumeroConcat = numero3Concat.concat(numero1Concat);

document.write("<br /><br />", frase2NumeroConcat);


//^ ----- ----- 16.- podemos usar la backticks y ``${variableAqui}`` para concatenar, esta es la forma más recomendada  ----- ----- 

//^ ----- ----- 17.- usar comillas simples dentro de comillas dobles (o vice versa) para hacer un escape de comillas. Tambien aplica para los backticks ----- ----- 


const nombreBackticks = "Juan Carlos López";

const fraseBackticks = `<br /><br /> Soy ${nombreBackticks} y "estoy" caminando`;

document.write(fraseBackticks);


//^ ----------------------------------- 
//^ -       OPERADORES INTERMEDIO     - 
//^ ----------------------------------- 


//^ ----- ----- 18.- Los operadores de comparación comparan 2 expresiones y devuelven un valor booleano dependiendo del resultado ----- ----- 

//^ ----- ----- 18,1.- los operadores son:   ==,   !=,   ===,   !==,   >,   >=,   <,   <=.    ----- ----- 

const numero1Comparacion = 23;

const numero2Comparacion = 13;

document.write(`<br /><br /> ${numero1Comparacion == numero2Comparacion}`);

const texto1Comparacion ="23";

document.write(`<br /><br /> ${numero1Comparacion == texto1Comparacion}`); 

document.write(`<br /><br /> ${numero1Comparacion === texto1Comparacion}`);


//^ ----- ----- 19.- Los operadores logicos comparan una condición y nos retornara un valor booleano ----- ----- 

//^ ----- ----- 19,1.- Los operadores son:   && (AND),   || (OR),   ! (NOT).   ----- ----- 


const numero1Logico = 23;

const numero2Logico = 7;

const numero3Logico = 14;

const resultado1Logico = numero1Logico > numero2Logico;

const resultado2Logico = numero3Logico <= numero2Logico;

document.write(` <br /><br /> ${resultado1Logico && !resultado2Logico}`)


//^ ----------------------------------- 
//^ -            Camel Case           - 
//^ ----------------------------------- 


//^ ----- ----- 20.- Javascript trabaja de que la primera palabra siempre es minuscula y cada palabra en adelante empezara por mayuscula. Importante para las funciones y variables ----- ----- 


//^ ----------------------------------- 
//^ -          CONDICIONALES          - 
//^ ----------------------------------- 


//^ ----- ----- 21.- Los condicionales nos permiten ejecutar un bloque de codigo si una condición se cumple ----- ----- 

//^ ----- ----- 21,1.- usando "else if" hara que si la primera condición no se cumple que verifique la siguiente condición ----- ----- 

//^ ----- ----- 21,2.- usando "else" hara que si ningun condición se cumple, que se ejecute lo que este dentro de su bloque ----- ----- 


const nombreCondicional = "Lopez"

if (nombreCondicional == "Juan") {

    document.write(`<br /><br /> <b>Tu nombre es ${nombreCondicional}<b/>`);

} else if (nombreCondicional == "López") {

    document.write(`<br /><br /> <b>Tu nombre es ${nombreCondicional}<b/>`);

} else {
    document.write(`<br /><br /> Tu nombre es otro`);
}




//? ----------------------------------- 
//* -       HISTORIA DE COFRA 1       - 
//* ----------------------------------- 


const dineroDiv = document.getElementById('dineroDiv');

const dineroDeRoberto = document.getElementById('dineroDeRoberto');
const dineroDePedro = document.getElementById('dineroDePedro');
const dineroDeCofla = document.getElementById('dineroDeCofla');

const dineroEnTotal = document.querySelector('.dineroTotal')
const tipoHelado = document.querySelector('.tipoDeHelado');
const vuelto = document.querySelector('.vuelto');

const facturaHelado = (dineroVuelto, precio, helado) => {
    dineroVuelto = dineroVuelto - precio;
    dineroVuelto = dineroVuelto.toFixed(2);
    tipoHelado.innerHTML = helado
    vuelto.innerHTML = dineroVuelto;
};

dineroDiv.addEventListener('input', () => {

    let dineroRoberto = dineroDeRoberto.value;
    let dineroPedro = dineroDePedro.value;
    let dineroCofla = dineroDeCofla.value;
    
    dineroRoberto = Number(dineroRoberto);
    dineroPedro = Number(dineroPedro);
    dineroCofla = Number(dineroCofla);

    const dineroTotal = dineroRoberto + dineroPedro + dineroCofla;
    let dineroVuelto = dineroTotal;

    dineroEnTotal.innerHTML = `${dineroTotal}$ USD`;

    if (dineroTotal < 0.6) {

        const helado = `Lo siento, pobre de mierda, no te alcanza para ningun helado`;
        const precio = 0;
        facturaHelado(dineroVuelto, precio, helado);

    } else if (dineroTotal >= 0.6 && dineroTotal < 1) {
        
        const helado = `Palito de helado de agua`;
        const precio = 0.6;
        facturaHelado(dineroVuelto, precio, helado);

    } else if (dineroTotal >= 1 && dineroTotal < 1.6) {

        const helado = `Palito de helado de crema`;
        const precio = 1;
        facturaHelado(dineroVuelto, precio, helado);

    } else if (dineroTotal >= 1.6 && dineroTotal < 1.7) {

        const helado = `Bombón helado marca heladix`;
        const precio = 1.6;
        facturaHelado(dineroVuelto, precio, helado);

    } else if (dineroTotal >= 1.7 && dineroTotal < 1.8) {

        const helado = `Bombón helado marca heladovich`;
        const precio = 1.7;
        facturaHelado(dineroVuelto, precio, helado);

    } else if (dineroTotal >= 1.8 && dineroTotal < 2.9) {

        const helado = `Bombón helado marca helardo`;
        const precio = 1.8;
        facturaHelado(dineroVuelto, precio, helado);

    } else if (dineroTotal >= 2.9) {

        const helado = `Potecito de helado con confites o Pote de 1/4 KG`;
        const precio = 2.9;
        facturaHelado(dineroVuelto, precio, helado);

    }
});




//^ ----------------------------------- 
//^ -             ARRAYS              - 
//^ ----------------------------------- 


//^ ----- ----- 22.- Un array es una manera de guardar mas de 1 dato, y de diferentes tipos ----- ----- 

//^ ----- ----- 22,1.- para definir una array usamos corchetes [] y se paramos cada elemento por una coma "," ----- ----- 

//^ ----- ----- 22,2.- los arrays tienen un indice, y ese index empieza desde 0, para aceder a los elementos desde el indice usamos corchetes [] y el número del indice  ----- ----- 


const arrays = ["Juan", 24, "Caracas"];

const frutas = ["banana", "manzana", "pera", 5, 9, "pedro"];

document.write(`<br /><br /> ${frutas}`);
document.write(`<br /><br /> ${frutas[1]}`);


//^ ----------------------------------- 
//^ -         ARRAYS ASOCIATIVOS      - 
//^ ----------------------------------- 


//^ ----- ----- 23.- Los arrays asociativos es una manera de crear arrays, pero que su indice no sea un numero, si no un nombre al que nosotros le definimos ----- ----- 

const br = "<br /><br />";

const pc = {
    nombrePC: "JuanPC",
    grafica: "Nvidia GT 710",
    procesador: "AMD Athlon II X3",
    ram: "3GB",
    espacio: "300GB",
};

document.write(`${br}${pc["nombrePC"]}`);

const nombrePC = pc["nombrePC"];
const grafica = pc["grafica"];
const procesador = pc["procesador"];
const ram = pc["ram"];
const espacio = pc["espacio"];

const fraseArrayAsociativo = 
    `${br} El nombre de mi PC es <b>${nombrePC }</b> <br>
    La grafica es: <b>${grafica}</b> <br>
    El procesador es: <b>${procesador}</b> <br> 
    La memoria ram es: <b>${ram}</b> <br>
    El espacio en disco es de <b>${espacio}</b> <br>`;

document.write(`${fraseArrayAsociativo}`);


//^ ----------------------------------- 
//^ -       BUCLES E ITERACIÓN        - 
//^ ----------------------------------- 


//^ ----- ----- 24.- Un bucle "while" es como un "if", si una condición se cumple ejecutara el bloque, y al terminar, volvera a preguntar la condición y se volvera a ejecutar, hasta que la condición no sea verdadera ----- ----- 


let numero1Bucles = 0;

if (numero1Bucles < 10) {

    numero1Bucles++;
    numero1Bucles++;

    document.write(br, numero1Bucles, br);

};


let numero2Bucles = 0;

while (numero2Bucles < 6) {

    numero2Bucles++;

    document.write(numero2Bucles + "<br>");
};

document.write("<br>");


//^ ----- ----- 25.- Con el "do while" primero se ejecuta el bloque de codigo, y luego se pregunta la condición, si es verdadera, seguira ejecutandose ----- ----- 


let numero3Bucles = 0;

do {

    numero3Bucles++;

    document.write(numero3Bucles + "<br>");

} while (numero3Bucles <= 6);


//^ ----- ----- 26.- La sentencia "break" nos permite romper un bucle, podemos usar un "if" y si la condición se cumple poner un break, asi se detendra en la parte que le indiquemos ----- ----- 


let numero1Break = 0;

while (numero1Break < 100) {

    numero1Break++;
    document.write(numero1Break);

    if (numero1Break === 10) {

        break;
        
    };

};

document.write("fin");


//^ ----- ----- 27.- Un ciclo "for" es como un "if" o un "while", pero se va a repetir las veces que nosotros le indiquemos ----- ----- 

//^ ----- ----- 27,1.- un "for" esta constituido por 3 partes: la declaración e iniciailización, la condición, y al final el aumento o decremento ----- ----- 

//^ ----- ----- 27,2.- tambien podemos declarar la variable por fuera y añadirla dentro del "for", ejemplo: for (i; i >= 0; i--) ----- ----- 

//^ ----- ----- 27,3.- se puede usar un break en "for" tambien ----- ----- 


document.write("<br>");

for (let i = 6; i >= -3; i--) {

    if (i === -2) {
        break
    };
    
    document.write(i + "<br>");

};


//^ ----- ----- 28.- Con "continue" lo usamos como un break, pero en vez de que termine el bucle, este solo saltara esa o esas iteraciones, y luego continuara con normalidad ----- ----- 


document.write("<br>");

for (let i = 20; i > 0; i--) {

    if (i <= 15 && i > 9) {
        continue
    };
    
    document.write(i + "<br>");

}


//^ ----- ----- 29.- Con "forin" podemos hacer un for de manera resumida, y nos permitira iterar sobre el indice de un arreglo, y nos devolvera su posición ----- ----- 


document.write("<br>");


const animales = ["gato", "perro", "tiranosaurio rex"];
animales.tamano = "grande"

for (animal in animales) {
    
    document.write(animal + "<br>");

};


document.write("<br>");


for (animal in animales) {
    
    document.write(animales[animal] + "<br>")

};


//^ ----- ----- 30.- "forof" es lo mismo que un "forin" pero nos devolvera su valor ----- ----- 


document.write(`${br}${br}`);


for (animal of animales) {
    
    document.write(animal + "<br>");

};

document.write(`<br> ${animales.tamano}`);



document.write(`${br}`);

for (componente in pc) {

    document.write(`<b>${componente}:</b> <br>`);
    document.write(`${pc[componente]}<br>`);
    document.write("<br>");

};


//^ ----- ----- 30,1.- tambien podemos recorrer un bucle dentro de otro bucle ----- ----- 

//^ ----- ----- 31.- La sentencia label nos permite darle un nombre a un bucle, y usarlo para terminarlo por ejemplo ----- ----- 


const array1Bucle = ["maría", "josefa", "roberta"];
const array2Bucle = ["pedro", "marcelo", array1Bucle, "josé"];

forRancio: for (let array in array2Bucle) {

    if (array == 2) {
        
        for (let array of array1Bucle) {

            if (array === "maría") {
                continue
            };

            document.write(array + "<br>");
            break forRancio;

        };

    } else {

        document.write(array2Bucle[array] + "<br>");

    };
};


//^ ----------------------------------- 
//^ -            FUNCIONES            - 
//^ ----------------------------------- 


//^ ----- ----- 32.- Una función es una porción de codigo que encapsulamos para volverlo a reutilizar mas adelante ----- ----- 

//^ ----- ----- 32,1.- se crea con la palabra reservada "function()" ----- ----- 

//^ ----- ----- 32,1.- se puede crear una función de varias maneras, usando "function 'nombre_de_variable()'" o "'nombre_de_variable' = function()" ----- ----- 

const inputRespuestaFunction1 = document.getElementById('inputRespuestaFunction');
const respuestaFunction1 = document.getElementById('respuestaFunction');

function saludarFunction(a, b, c, d) {
    
    a.addEventListener('input', () => {
    
        if (c === undefined || d === undefined ) {

            if (a.value === "bien" ) {
                
                b.innerHTML = "me alegro"
                
            } else if (a.value === "mal") {
                
                b.innerHTML = "que pena"
                
            } else {
                
                b.innerHTML = ""
                
            };
            
        } else {
            
            if (a.value === "bien" ) {
                
                b.innerHTML = c
                
            } else if (a.value === "mal") {
                
                b.innerHTML = d
                
            } else {
                
                b.innerHTML = ""
                
            };
            
        };

    
    });

};

saludarFunction(inputRespuestaFunction1, respuestaFunction1);


const inputRespuestaFunction2 = document.getElementById('inputRespuestaFunction2');
const respuestaFunction2 = document.getElementById('respuestaFunction2');

saludarFunction(inputRespuestaFunction2, respuestaFunction2, "guay", "pucha");


//^ ----- ----- 33.- Un return le asocia un valor a la función. Las funciones ejecutan codigo pero estan vacias, el return hara que la función acabe y nos dara un dato (se puede usar como un break), ya sea string, numero, booleano, array etc ----- ----- 


function saludarFunction2() {
    return "todo okay";
    alert("hola");
};

const saludoFunction = saludarFunction2();

document.write("<br>" + saludoFunction);


//^ ----- ----- 34.- Un parametro es una manera de definir una variable dinamicamente dentro de una función ----- ----- 


function sumaFunction(num1,num2) {

    document.write(br);

    const res = num1 + num2;

    return res;

    // document.write(res);
    
};

// sumaFunction(12,32);

// sumaFunction(22,55);

const resultadoFunction = sumaFunction(20,25);

document.write(resultadoFunction);


function saludarFunction3(nombre) {

    const frase = `¡Hola ${nombre}! ¿Cómo estás?`;
    
    document.write(br);
    document.write(frase);

}

saludarFunction3("Pedro");


//^ ----- ----- 35.- Una función flecha es otra manera de crear una función de manera mucho mas resumida ----- ----- 


const saludarFlecha = (nombre) => {
    
    const frase = `¡Hola ${nombre}! ¿Cómo estás?`;
    
    document.write(br);
    document.write(frase);

}

saludarFlecha("Pedro");



//^ ----- ----- 35,1.- las funciones flechas pueden ser resumidas aun mas. Por ejemplo, si solo recibe un parametro no hace falta ponerle parentesis ----- ----- 

//^ ----- ----- 35,2.- Si la función tiene una sola linea de codigo no hace falta ponerle corchetes ----- ----- 

const saludarFlecha2 = nombre => `${br} ¡Hola ${nombre}! ¿Cómo estás?`;

document.write(saludarFlecha2("Pedro"));





//? ----------------------------------- 
//^ -       HISTORIA DE COFLA 2       - 
//^ ----------------------------------- 


const fiestaDeHora = document.getElementById('fiestaHora');
const fiestaDeMinutos = document.getElementById('fiestaMinutos')
const fiestaDeNombre = document.getElementById('fiestaNombre');
const fiestaDeEdad = document.getElementById('fiestaEdad');
const fiestaDeBoton = document.getElementById('fiestaBoton');
const fiestaDeRespuesta = document.getElementById('fiestaRespuesta');

let fiestaHora = fiestaDeHora;
let fiestaMinutos = fiestaDeMinutos;

let minutos = 0;
let hora = 11;




fiestaDeBoton.addEventListener('click', () => {
    
    let fiestaNombre = fiestaDeNombre.value;
    let fiestaEdad = fiestaDeEdad.value;
    let fiestaRespuesta = fiestaDeRespuesta;
    // fiestaNombreRes = fiestaNombre.value
    // fiestaEdadRes = fiestaEdad.value
    console.log(fiestaNombre)
    console.log(fiestaEdad)


    actualizarHora();
});




actualizarHora = () => {

    minutos = minutos + 27;
    
        
    if (minutos >= 60) {
        
        hora++
        
        minutos = minutos - 60;

    };

    if (hora > 12) {
        
        hora = hora - 12;
        
    };

    if (minutos <= 9 || minutos == 0) {
        
        console.log(hora);
        console.log("0" + minutos);
        console.log(br);
        fiestaHora.innerHTML = hora;
        fiestaMinutos.innerHTML = "0" + minutos;

    } else {
        
        console.log(hora);
        console.log(minutos);
        console.log(br);
    
        fiestaHora.innerHTML = hora;
        fiestaMinutos.innerHTML = minutos;
    };

};