

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




//^ ----------------------------------- 
//^ -           Problema 1            - 
//^ ----------------------------------- 




const fiestaDeHora = document.getElementById('fiestaHora');
const fiestaDeMinutos = document.getElementById('fiestaMinutos');
const fiestaDeAM = document.getElementById('fiestaAM');

const fiestaDeNombre = document.getElementById('fiestaNombre');
const fiestaDeEdad = document.getElementById('fiestaEdad');

const fiestaDeBoton = document.getElementById('fiestaBoton');
const fiestaDeRespuesta = document.getElementById('fiestaRespuesta');

let fiestaHora = fiestaDeHora;
let fiestaMinutos = fiestaDeMinutos;

const fiestaAM = "A.M.";
const fiestaPM = "P.M.";

let paseGratis = true;


fiestaDeBoton.addEventListener('click', () => {
    
    let fiestaNombre = fiestaDeNombre.value;
    let fiestaEdad = fiestaDeEdad.value;
    let fiestaRespuesta = fiestaDeRespuesta;
    
    resetearDatos();

    if (tiempo.hora >= 8 && tiempo.hora < 11) {

        fiestaRespuesta.innerHTML = `Lo siento che, ya se acabo la fiesta.`;
        
    } else if (fiestaEdad >= 18 && tiempo.hora >= 2 && tiempo.hora < 8 && paseGratis === true) {

        fiestaRespuesta.innerHTML = `ERES LA PRIMERA PERSONA EN LLEGAR DESPUES DE LAS 2 AM, TU ENTRADA ES GRATIS. ¡Disfruta de la fiesta!`;
        
        actualizarHora(tiempo, tiempo.extrasEs27);
        verificarAM(tiempo);


        paseGratis = false;

    } else if   (fiestaEdad >= 18 && fiestaEdad <= 49 && fiestaNombre != "") {
        
        fiestaRespuesta.innerHTML = `Wenas ${fiestaNombre}, puedes pasar`;
        
        actualizarHora(tiempo, tiempo.extrasEs27);
        verificarAM(tiempo);

    } else if (fiestaNombre == "" && fiestaEdad >= 18) {

        fiestaRespuesta.innerHTML = `Hola persona misteriosa, puede pasar`;
        
        actualizarHora(tiempo, tiempo.extrasEs27);
        verificarAM(tiempo);

    } else if (fiestaEdad >= 50 && fiestaEdad <= 79  ) {

        fiestaRespuesta.innerHTML = `Puede pasar anciano ¡Disfrute de la fiesta!`;
        
        actualizarHora(tiempo, tiempo.extrasEs27);
        verificarAM(tiempo);

    } else if (fiestaEdad >= 80) {

        fiestaRespuesta.innerHTML = `Weeeeeenas señor esqueleto, pase y diviertase`;
        
        actualizarHora(tiempo, tiempo.extrasEs27);
        verificarAM(tiempo);

    } else if ( fiestaEdad < 18 && fiestaEdad >= 13) {
        
        fiestaRespuesta.innerHTML = `Che ${fiestaNombre}, tenés que ser mayor de edad para pasar`;
        
        actualizarHora(tiempo, tiempo.extrasEs1);
        verificarAM(tiempo);

    } else if (fiestaEdad < 13 && fiestaEdad >= 7) {
        
        fiestaRespuesta.innerHTML = `Mejor vuelve en unos años nené`;

        actualizarHora(tiempo, tiempo.extrasEs1);
        verificarAM(tiempo);

    } else if (fiestaEdad <= 6 && fiestaEdad >= 1) {
        
        fiestaRespuesta.innerHTML = `Hey bebito, vuelve cuando tengas licencia de conducir ok?`;
        
        actualizarHora(tiempo, tiempo.extrasEs1);
        verificarAM(tiempo);

    } else if (fiestaRespuesta.textContent == `¿Eri mudo conche tu mare? Decimé tu nombre y edad` || fiestaRespuesta.textContent == `No tengo toda la noche, decimé tu edad`) {

        fiestaRespuesta.innerHTML = `No tengo toda la noche, decimé tu edad`;

        actualizarHora(tiempo, tiempo.extrasEs1);
        verificarAM(tiempo);

    } else if (fiestaNombre == "" && fiestaEdad == 0) {

        fiestaRespuesta.innerHTML = `¿Eri mudo conche tu mare? Decimé tu nombre y edad`;

        actualizarHora(tiempo, tiempo.extrasEs1);
        verificarAM(tiempo);


    } else if (fiestaEdad == 0) {

        fiestaRespuesta.innerHTML = `${fiestaNombre}, decimé tu edad boludo`;
        
        fiestaDeNombre.value = `${fiestaNombre}`;

        actualizarHora(tiempo, tiempo.extrasEs1);
        verificarAM(tiempo);

    }
    
});


const tiempo = {
    
    hora: 11,
    minutos: 0,
    extrasEs27: {
        extras: 27,
    },
    extrasEs1: {
        extras: 1,
    },

};


const resetearDatos = () => {

    fiestaDeNombre.value = "";
    fiestaDeEdad.value = "";

};


const verificarAM = (tiempo) => {

    fiestaDeAM.innerHTML = fiestaPM;

    if (tiempo.hora > 11) {

        fiestaDeAM.innerHTML = fiestaAM;

    };
    
    if (tiempo.hora == 11) {

        fiestaDeAM.innerHTML = fiestaPM;

    };
    
    if (tiempo.hora >= 1 && tiempo.hora <= 8) {

        fiestaDeAM.innerHTML = fiestaAM;

    };
};


const actualizarHora = (tiempo, extra) => {

    tiempo.minutos = tiempo.minutos + extra.extras;
    
    if (tiempo.minutos >= 60) {
        
        tiempo.hora++;
        
        tiempo.minutos = tiempo.minutos - 60;

    };

    if (tiempo.hora > 12) {
        
        tiempo.hora = tiempo.hora - 12;
        
    };

    if (tiempo.minutos == 0 || tiempo.minutos <= 9) {
        
        fiestaHora.innerHTML = tiempo.hora;
        fiestaMinutos.innerHTML = "0" + tiempo.minutos;

    } else {
    
        fiestaHora.innerHTML = tiempo.hora;
        fiestaMinutos.innerHTML = tiempo.minutos;

    };

    
};




//^ ----------------------------------- 
//^ -            Problema 2           - 
//^ ----------------------------------- 


const asistenciaClase = document.getElementById('asistenciaClaseDia');

const asistenciaPosicion = document.getElementById('asistenciaPosicion');
const asistenciaAlumno = document.getElementById('asistenciaAlumno');

const asistenciaBotonPresentes = document.getElementById('asistenciaBotonPresentes');
const asistenciaBotonAusentes = document.getElementById('asistenciaBotonAusentes');

const asistenciaDivBotones = document.getElementById('asistenciaDivBotones');

const asistenciaResultado = document.getElementById('asistenciaResultado');

let finSemestre = false;


//* ----- ----- Cambiar cuantas clases totales habra en el semestre, cambiando el resultado de toda la funcionalidad ----- ----- 
const clasesTotales = 22;
//^ ----- -----  ----- ----- 


const listaAlumnos = {
    
    alumno1: {
        nombre: "Pedro Sanchez",
        posicion: 1,
        asistencias: 0,
    },
    alumno2: {
        nombre: "Jessica Uribe",
        posicion: 2,
        asistencias: 0,
    },
    alumno3: {
        nombre: "Juan López",
        posicion: 3,
        asistencias: 0,
    },
    alumno4: {
        nombre: "Luis Alfonso",
        posicion: 4,
        asistencias: 0,
    },
    alumno5: {
        nombre: "Maria Peréz",
        posicion: 5,
        asistencias: 0,
    },
    alumno6: {
        nombre: "Jerald Grimes",
        posicion: 6,
        asistencias: 0,
    },
    alumno7: {
        nombre: "Latoya Williamson",
        posicion: 7,
        asistencias: 0,
    },
    alumno8: {
        nombre: "Christina Brekke Jr.",
        posicion: 8,
        asistencias: 0,
    },
    alumno9: {
        nombre: "Shawna Frami",
        posicion: 9,
        asistencias: 0,
    },
    alumno10: {
        nombre: "Kara Lueilwitz",
        posicion: 10,
        asistencias: 0,
    },
    alumno11: {
        nombre: "Ms. Cassandra Fay",
        posicion: 11,
        asistencias: 0,
    },
    alumno12: {
        nombre: "Sergio Smith",
        posicion: 12,
        asistencias: 0,
    },
    alumno13: {
        nombre: "Hope Kemmer",
        posicion: 13,
        asistencias: 0,
    },
    alumno14: {
        nombre: "Marianne Ferry",
        posicion: 14,
        asistencias: 0,
    },
    alumno15: {
        nombre: "Ervin Nader",
        posicion: 15,
        asistencias: 0,
    },
    alumno16: {
        nombre: "Miss Simon Goldner",
        posicion: 16,
        asistencias: 0,
    },
    alumno17: {
        nombre: "Byron Heaney",
        posicion: 17,
        asistencias: 0,
    },
    alumno18: {
        nombre: "Antoinette Swift",
        posicion: 18,
        asistencias: 0,
    },
    alumno19: {
        nombre: "Phyllis Nienow",
        posicion: 19,
        asistencias: 0,
    },
};


const listaAlumnosArray = Object.entries(listaAlumnos);

const alumnoContadorInicial = 0;
let alumnoContador = alumnoContadorInicial;

const contadorClase = 1;
let contadorClaseDia = contadorClase;

asistenciaClaseDia.innerHTML = contadorClase;
asistenciaPosicion.innerHTML = listaAlumnosArray[0][1].posicion;
asistenciaAlumno.innerHTML = listaAlumnosArray[0][1].nombre;



asistenciaDivBotones.addEventListener('click', (e) => {

    let asistenciaMinima = contadorClaseDia / 10;

    let promedioAsistenciaMinima = contadorClaseDia - asistenciaMinima;
    
    if (e.target && e.target.id === "asistenciaBotonPresentes" && contadorClaseDia <= clasesTotales) {

        if (alumnoContador != -1) {

            listaAlumnosArray[alumnoContador][1].asistencias++;

        };

        actualizarEstudiantes();

    } else if (e.target && e.target.id === "asistenciaBotonAusentes" && contadorClaseDia <= clasesTotales) {

        actualizarEstudiantes();
        
    };

    if (contadorClaseDia == (clasesTotales + 1) && finSemestre === false) {

        mostrarListaAsistencias(promedioAsistenciaMinima);

    };
});




const actualizarEstudiantes = () => {

    if (alumnoContador == (listaAlumnosArray.length - 1)) {

        alumnoContador = alumnoContador - listaAlumnosArray.length;
        contadorClaseDia++;
    };
    
    asistenciaClaseDia.innerHTML = contadorClaseDia;
    asistenciaPosicion.innerHTML = listaAlumnosArray[alumnoContador + 1][1].posicion;
    asistenciaAlumno.innerHTML = listaAlumnosArray[alumnoContador + 1][1].nombre;
    
    alumnoContador++;

    if (contadorClaseDia == (clasesTotales + 1)) {

        asistenciaClaseDia.innerHTML = `<span style="color: green;">"Fin del semestre"</span>`;
        asistenciaPosicion.innerHTML = "0";
        asistenciaAlumno.innerHTML = `<span style="color: green;">Disfruten las vacaciones mis estudiantes</span>`;
    };
};


const mostrarListaAsistencias = (promedioAsistenciaMinima) => {

    listaAlumnosArray.forEach(([key, value]) => {
    
        if (value.asistencias <= promedioAsistenciaMinima) {
            
            asistenciaResultado.innerHTML += `
            <b>${value.posicion} | ${value.nombre}: 
                <span style="color: red;"> ${value.asistencias} de ${clasesTotales} DESAPROBADO </span> 
            </b> 
            <hr>
            `;

        } else {

            asistenciaResultado.innerHTML += `
            <b>${value.posicion} | ${value.nombre}: 
                <span style="color: green;"> ${value.asistencias} de ${clasesTotales} </span> 
            </b> 
            <hr>
            `;

        };
    
    });

    finSemestre = true;

};





//^ ----------------------------------- 
//^ -          Problema 3   version 1 - 
//^ ----------------------------------- 

const calculadoraContainer = document.getElementById('calculadoraContainer');

const calculadoraBtnClear = document.getElementById('calculadoraBtnClear');
const calculadoraBtnDivide = document.getElementById('calculadoraBtnDivide');
const calculadoraBtnMultiply = document.getElementById('calculadoraBtnMultiply');
const calculadoraBtnDelete = document.getElementById('calculadoraBtnDelete');

const calculadoraBtnMinus = document.getElementById('calculadoraBtnMinus');
const calculadoraBtnPlus = document.getElementById('calculadoraBtnPlus');
const calculadoraBtnEqual = document.getElementById('calculadoraBtnEqual');
const calculadoraBtnDot = document.getElementById('calculadoraBtnDot');

const calculadoraBtn1 = document.getElementById('calculadoraBtn1');
const calculadoraBtn2 = document.getElementById('calculadoraBtn2');
const calculadoraBtn3 = document.getElementById('calculadoraBtn3');

const calculadoraBtn4 = document.getElementById('calculadoraBtn4');
const calculadoraBtn5 = document.getElementById('calculadoraBtn5');
const calculadoraBtn6 = document.getElementById('calculadoraBtn6');

const calculadoraBtn7 = document.getElementById('calculadoraBtn7');
const calculadoraBtn8 = document.getElementById('calculadoraBtn8');
const calculadoraBtn9 = document.getElementById('calculadoraBtn9');

const calculadoraEcuacion = document.getElementById('calculadoraEcuacion');
const calculadoraResultado = document.getElementById('calculadoraResultado');


calculadoraContainer.addEventListener('click', (e) => {
    
    if (calculadoraEcuacion.textContent.slice(-1) != "-" && 
        calculadoraEcuacion.textContent.slice(-1) != "+" && 
        calculadoraEcuacion.textContent.slice(-1) != "*" && 
        calculadoraEcuacion.textContent.slice(-1) != "/" &&
        calculadoraEcuacion.textContent.slice(-1) != "") {

        if (e.target && e.target.id === "calculadoraBtnDivide") {

            calculadoraEcuacion.innerHTML += "/"
    
        } else if (e.target && e.target.id === "calculadoraBtnMultiply") {
    
            calculadoraEcuacion.innerHTML += "*"
    
        } else if (e.target && e.target.id === "calculadoraBtnMinus") {

            calculadoraEcuacion.innerHTML += "-"
    
        } else if (e.target && e.target.id === "calculadoraBtnPlus") {

            calculadoraEcuacion.innerHTML += "+"
    
        }
    }

    if (e.target && e.target.id === "calculadoraBtnClear") {

        calculadoraEcuacion.innerHTML = ""
        calculadoraResultado.innerHTML = ""

    } else if (e.target && e.target.id === "calculadoraBtnDelete") {

        calculadoraEcuacion.innerHTML = calculadoraEcuacion.innerHTML.slice(0, -1)

        if (calculadoraEcuacion.innerHTML == "") {

            calculadoraResultado.innerHTML = 0

        }

    } else if (e.target && e.target.id === "calculadoraBtn7") {

        calculadoraEcuacion.innerHTML += 7

    } else if (e.target && e.target.id === "calculadoraBtn8") {

        calculadoraEcuacion.innerHTML += 8

    } else if (e.target && e.target.id === "calculadoraBtn9") {

        calculadoraEcuacion.innerHTML += 9

    } else if (e.target && e.target.id === "calculadoraBtn4") {

        calculadoraEcuacion.innerHTML += 4

    } else if (e.target && e.target.id === "calculadoraBtn5") {

        calculadoraEcuacion.innerHTML += 5

    } else if (e.target && e.target.id === "calculadoraBtn6") {

        calculadoraEcuacion.innerHTML += 6

    } else if (e.target && e.target.id === "calculadoraBtn1") {

        calculadoraEcuacion.innerHTML += 1

    } else if (e.target && e.target.id === "calculadoraBtn2") {

        calculadoraEcuacion.innerHTML += 2

    } else if (e.target && e.target.id === "calculadoraBtn3") {

        calculadoraEcuacion.innerHTML += 3

    } else if (e.target && e.target.id === "calculadoraBtnEqual") {

        calculadoraEcuacion.innerHTML = calculadoraResultado.textContent


    } else if (e.target && e.target.id === "calculadoraBtn0") {

        calculadoraEcuacion.innerHTML += 0

    } else if (e.target && e.target.id === "calculadoraBtnDot") {

        calculadoraEcuacion.innerHTML += "."

    }

    if (e.target && e.target.classList.contains("calculadora__numero") === true) {

        if (calculadoraEcuacion.innerHTML != "") {

            if (calculadoraEcuacion.textContent.slice(-1) != "-" && 
                calculadoraEcuacion.textContent.slice(-1) != "+" && 
                calculadoraEcuacion.textContent.slice(-1) != "*" && 
                calculadoraEcuacion.textContent.slice(-1) != "/") {
    
                calculadoraResultado.innerHTML = eval(calculadoraEcuacion.innerHTML)

            }
        }
    }

    if (calculadoraEcuacion.textContent.slice(-1) == "-" || 
        calculadoraEcuacion.textContent.slice(-1) == "+" || 
        calculadoraEcuacion.textContent.slice(-1) == "*" || 
        calculadoraEcuacion.textContent.slice(-1) == "/" ) {

        calculadoraResultado.innerHTML = ""

    }

    if (calculadoraResultado.innerHTML == "Infinity" || calculadoraResultado.innerHTML == "NaN" ) {

        calculadoraResultado.innerHTML = "0"

    }
    
})

//^ ----- ----- Manera usando expresiones regulares y el teclado en la calculadora ----- ----- 

// const expresion = /[\d()*/+-]+/

// const comprobar = (e) => {

//     if (expresion.test(e.key)) {

//         console.log("yes")
//         return true

//     } else {

//         return false
//     }

// }





//^ ----------------------------------- 
//^ -            Problema 3 version 2 - 
//^ ----------------------------------- 


const getId = selector => document.getElementById(selector) 

const calculadora2Container = getId("calculadora2Container")

const calculadora2Ecuacion = getId("calculadora2Ecuacion")

let calcNum1
let calcNum2
let tipoEcuacion
let operando = false

let cacheNum1 = ""


// Arreglar el error de cuando se le da al contenedor del event listener se vacia la ecuación (el operador)
//? Arreglar error de cuando se usa un operador y despues otro, y luego se le da click a equal da NaN
// Arreglar error de cuando se da a un operador, se borra y luego se le da click a otro operador
//? Arreglar error de cuando se borra un operador se borra el cacheNum1
// Arreglar error de que despues de usar un operador solo se peude poner un digito
// Arreglar problema de cuando se escribe un numero, un operador, un numero y luego denuevo operador y otro numero
// Arreglar error de cuando se hace una operación, el calcNum1 no recoge el valor que ya esta en el textContent
//? Arreglar error de NaN

const expReg = /[*/+-]/


calculadora2Container.addEventListener('click', (e) => {
    
    const t = e.target
    
    console.log(t.tagName)

    if (t && t.classList.contains("calculadora__numero") && 
            (expReg.exec(calculadora2Ecuacion.innerHTML))) {
        
        console.log("es aqui?")
        calculadora2Ecuacion.innerHTML = ""
        // operando = false
    }

    if (t && t.classList.contains("calculadora__numero") &&
        calculadora2Ecuacion.innerHTML === "0") {
        
        calculadora2Ecuacion.innerHTML = ""
    }


    if (t && t.value === "C") {
        calculadora2Ecuacion.innerHTML = "0"
        cacheNum1 = ""
        calcNum1 = ""
        calcNum2 = ""
        operando = false
        tipoEcuacion = null
    }

    if (t && t.value === "Borrar") {

        if (operando === false) {

            cacheNum1 = cacheNum1.slice(0, -1)
            calcNum1 = calcNum1.slice(0, -1)
            calculadora2Ecuacion.innerHTML = calculadora2Ecuacion.innerHTML.slice(0, -1)

        } else if (operando === true) {
            
            tipoEcuacion = null
            calculadora2Ecuacion.innerHTML = calculadora2Ecuacion.innerHTML.slice(0, -1)
        }
    }


    if (t && t.classList.contains("calculadora__numero")) {

        cacheNum1 += t.value
        calculadora2Ecuacion.innerHTML += t.value
    }


    if (t && t.classList.contains("calculadora__operador")) {

        if (calcNum1 === "" || calcNum1 === undefined) {

            calcNum1 = cacheNum1
            
        }
        calculadora2Ecuacion.textContent = t.value
        tipoEcuacion = t.value
        operando = true
        cacheNum1 = ""
    }



    if (t && t.value === "=") {
        
        calcNum2 = calculadora2Ecuacion.innerHTML;
        calcNum1 = Number(calcNum1);
        calcNum2 = Number(calcNum2);
        cacheNum1 = ""
        operando = false

        if (tipoEcuacion === "+") {
            
            plus(calcNum1, calcNum2)
            
            console.log(plus(calcNum1, calcNum2))

        } else if (tipoEcuacion === "-") {
            
            minus(calcNum1, calcNum2)
            
        } else if (tipoEcuacion === "*") {
            
            multiply(calcNum1, calcNum2)
            
        } else if (tipoEcuacion === "/") {
            
            divide(calcNum1, calcNum2)
        }

        calcNum1 = calculadora2Ecuacion.innerHTML
    }



    if (calculadora2Ecuacion.innerHTML == "Infinity") {

        calculadora2Ecuacion.innerHTML = "0"
    }
})



const plus = (num1, num2 = 0) => {

    // if (num2 == undefined) {
    //     num2 = 0
    // }

    res = num1 + num2
    calculadora2Ecuacion.innerHTML = res;
    tipoEcuacion = null
}


const minus = (num1, num2 = 0) => {

    res = num1 - num2
    calculadora2Ecuacion.innerHTML = res;
    tipoEcuacion = null
}


const multiply = (num1, num2 = 1) => {

    res = num1 * num2
    calculadora2Ecuacion.innerHTML = res;
    tipoEcuacion = null
}


const divide = (num1, num2 = 1) => {

    res = num1 / num2
    calculadora2Ecuacion.innerHTML = res;
    tipoEcuacion = null
}


//^ ----------------------------------- 
//^ -    PROGRAMACIÓN ORIENTADA A OBJETOS  - 
//^ ----------------------------------- 


//^ ----- ----- 36.- El POO es un paradigma de la programación, donde instanciamos objetos como en la vida real, y evitar repetir codigo. ----- ----- 

//^ ----- ----- 37.- Una clase es como una receta, donde tendra propiedades (variables) y metodos (funciones) ----- ----- 

//^ ----- ----- 37,1.- usaremos "constructor" antes de definir las propiedades del objeto ----- ----- 

class AnimalPOO {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} ${br}`;
    };
    
    verInfo = () => {
        document.write(`${this.info}`);
    };
    ladrar = () => {
        if (this.especie === "perro") {
            document.write(`${br} ¡Waw! ${br}`);
        } else {
            document.write(`No puede ladrar ya que es un ${this.especie} ${br}`);
        }
    }

};

const perro = new AnimalPOO("perro", 5, "marron");
const gato = new AnimalPOO("gato", 2, "negro");
const pajaro = new AnimalPOO("pajaro", 1, "verde");

// document.write(`${br} ${perro.info}`);
// document.write(`${br} ${gato.info}`);
// document.write(`${br} ${pajaro.info}`);

perro.ladrar();
gato.verInfo();
pajaro.verInfo();



//^ ----- ----- 38.- La "abstracción" seria resumir lo más que podamos el objeto ----- ----- 

//^ ----- ----- 39.- la "modularidad" es dividir un problema grande en en poblemas mas pequeños ----- ----- 

//^ ----- ----- 40.- El "encapsulamiento" es encerrar los datos para que el usuario no pueda acceder a ellos ----- ----- 

//^ ----- ----- 41.- El "polimorfismo" es la manera en la que un objeto se comportara diferente por sus propiedades ante un metodo ----- ----- 


//^ ----- ----- 42.- La herencia es pasarle propiedades u metodos de una clase a otra ----- ----- 

//^ ----- ----- 42,1.- usamos "super" y "extends" para usar la herencia de las propiedades que vamos a pasar ----- ----- 

//^ ----- ----- 42,2.- si usamos la palabra reservada "static" en un metodo, podremos acceder a ese metodo sin necesidad de crear el objeto (solo funciona si el metodo no utiliza ninguna propiedad del objeto) ----- ----- 

//^ ----- ----- 43.- usaremos setters para definir un valor de una propiedad y getters para obtener el valor de una propiedad (y los 2 funcionaran como propiedades a pesar de que son metodos) ----- ----- 

class PerroPOO extends AnimalPOO {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    static ladrar = () => {
        alert("¡WAW!")
    }
    set setRaza(newName) {
        this.raza = newName;
    }
    get getRaza() {
        return this.raza;
    }
}

const perro2 = new PerroPOO("perro", 4, "negro", "doberman");

perro2.verInfo();
//? PerroPOO.ladrar();

perro2.setRaza = "Pedro"
document.write(perro2.getRaza)



//? ----------------------------------- 
//^ -       HISTORIA DE COFLA 3       - 
//^ ----------------------------------- 



//^ ----------------------------------- 
//^ -           PROBLEMA 1            - 
//^ ----------------------------------- 


const telefonosDiv = document.getElementById("telefonosDiv");

class CelularPOO {
    constructor(id, marca, color, peso, pantalla, camaraRes, ram) {
        this.id = id;
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camaraRes = camaraRes;
        this.ram = ram;
        this.on = false;
        this.recording = false
    };
    
    specs = (letraColor) => {
        const styleColor = `<b style="color: ${letraColor};">`;
        telefonosDiv.innerHTML +=
        `<br><br>
        Marca: ${styleColor} ${this.marca}</b> <br>
        Color: ${styleColor} ${this.color}</b> <br>
        Peso: ${styleColor} ${this.peso}</b> <br>
        Pantalla: ${styleColor} ${this.pantalla}</b> <br>
        Camara: ${styleColor} ${this.camaraRes}</b> <br>
        Ram: ${styleColor} ${this.ram}</b> <br>
        `;
    };

    prender = () => {
        if (this.on === false) {
            alert("El teléfono se ha encendido"), 
            this.on = true
        } else {
            alert("El teléfono se ha apagado"), 
            this.on = false,
            this.recording = false
        }
    };

    reiniciar = () => this.on ? (alert("El teléfono se ha reiniciado"), this.recording = false) : alert("Enciende el teléfono para poder reinicarlo");

    tomarFoto = () => this.on ? alert(`*Click* se ha guardado la foto en "${this.camaraRes}"`) : alert("No puedes tomar foto con el telefono apagado");

    grabar = () => {
        if (this.on === true && this.recording === false) {
            alert(`Se ha iniciado la grabación en "${this.camaraRes}"`);
            this.recording = true;
        } else if (this.on === true && this.recording === true) {
            alert(`Se ha guardado la grabación`);
            this.recording = false;
        } else {
            alert("No puedes grabar con el teléfono apagado, tontito")
        };
    };

    funcionesTLF = (color) => {
        this.specs(color)
        telefonosDiv.innerHTML += `
        <div>
            <input type="button" value="Prender" data-on="${this.id}">
            <input type="button" value="Reiniciar" data-restart="${this.id}">
            <input type="button" value="Tomar foto" data-foto="${this.id}">
            <input type="button" value="Grabar" data-video="${this.id}">
        </div>
        `;

        telefonosDiv.addEventListener('click', (e) => {

            if (e.target && e.target.dataset.on === this.id) {
                this.prender();
            } else if (e.target && e.target.dataset.restart === this.id) {
                this.reiniciar();
            } else if (e.target && e.target.dataset.foto === this.id) {
                this.tomarFoto();
            } else if (e.target && e.target.dataset.video === this.id) {
                this.grabar();
            };
        });
    };
};

const celular1 = new CelularPOO("1", "Tecno Spark 8C", "Azul claro", "193g", "6.5 pulgadas", "Full HD", "4GB+3GB");

const celular2 = new CelularPOO("2", "Motolora g7", "Azul oscuro", "172g", "6.2 pulgadas", "Full HD", "4GB");

const celular3 = new CelularPOO("3", "Yezz", "Negro", "154g", "5.8 pulgadas", "HD", "2GB");


celular1.funcionesTLF("orange");
celular2.funcionesTLF("blue");
celular3.funcionesTLF("brown");

//* manera linda de recorrer la info de los celulares
// const recorrerCelular = (celular, letraColor) => {
//     document.write("<br>");
//     Object.entries(celular).forEach(([key, value]) => {
//         document.write(
//             `<br>
//             ${key[0].toUpperCase() + key.substring(1)}: 
//             <b style="color: ${letraColor};">
//                 ${value}
//             </b>`
//         );
//     });
//     document.write("<br>")
// }
//*


//^ ----------------------------------- 
//^ -           PROBLEMA 2            - 
//^ -----------------------------------


class CelularHighEndPOO extends CelularPOO {
    constructor(id, marca, color, peso, pantalla, camaraRes, ram, camaraRes2){
        super(id, marca, color, peso, pantalla, camaraRes, ram);
        this.camaraRes2 = camaraRes2;
    };

    specsHighEnd = (color) => {
        this.specs(color);
        telefonosDiv.innerHTML +=`Resolución de camara extra: <b style="color: ${color};">${this.camaraRes2}</b>`;
    };

    funcionesTLFHighEnd = (color) => {
        this.funcionesTLF(color);
        telefonosDiv.innerHTML +=`Resolución de camara extra: <b style="color: ${color};">${this.camaraRes2}</b>`;
        telefonosDiv.innerHTML += `
        <div>
            <input type="button" value="Camara super lenta" data-slow="${this.id}">
            <input type="button" value="Reconocimiento facial" data-facial="${this.id}">
        </div>
        `;

        telefonosDiv.addEventListener('click', (e) => {
            if (e.target && e.target.dataset.slow === this.id) {
                this.superSlowCamera();
            } else if (e.target && e.target.dataset.facial === this.id) {
                this.reconocimientoFacial();
            };
        });
    };

    superSlowCamera = () => {
        if (this.on === true && this.recording === false) {
            alert(`Se ha iniciado la grabación de "Camara super lenta" en "${this.camaraRes}"`);
            this.recording = true;
        } else if (this.on === true && this.recording === true) {
            alert(`Se ha guardado la grabación`);
            this.recording = false;
        } else {
            alert("No puedes grabar en 'Camara super lenta' con el teléfono apagado, tontito");
        };
    };

    reconocimientoFacial = () => this.on ? alert("Se inicio el reconocimiento facial") : alert("No puedes usar el 'Reconocimiento facial' con el teléfono apagado, tontito")
};

const celularHigh1 = new CelularHighEndPOO("4", "Iphone 14 Pro Max", "Blanco", "240g", "6.7 pulgadas", "4K", "6GB", "2K");

const celularHigh2 = new CelularHighEndPOO("5", "Samsung Galaxy S23 Ultra", "Crema", "234g", "6.8 pulgadas", "4K", "8GB/12GB", "2K");

celularHigh1.funcionesTLFHighEnd("violet");
celularHigh2.funcionesTLFHighEnd("chartreuse");



//^ ----------------------------------- 
//^ -           PROBLEMA 3            - 
//^ ----------------------------------- 

const appsDiv = document.getElementById("appsDiv");

class AppPOO {
    constructor(id, titulo, descargas, estrellas, peso){
        this.id = id;
        this.titulo = titulo;
        this.descargas = descargas;
        this.estrellas = estrellas;
        this.peso = peso;
        this.instalado = false;
        this.abierto = false;
    };

    instalar = () => this.instalado ? alert(`"${this.titulo}" ya esta instalado en su dispositivo`) : (alert(`La aplicación "${this.titulo}" se ha instalado con exitó`), this.instalado = true);

    abrir = () => {
        if (this.abierto === false && this.instalado === true) {
            alert(`Abriendo "${this.titulo}"`);
            this.abierto = true;
        } else if (this.abierto === true && this.instalado === true) {
            alert(`La aplicación "${this.titulo}" ya esta abierta`);
        } else {
            alert(`Debes instalar la aplicación para poder abrirla`)
        }
    }

    cerrar = () => {
        if (this.abierto === true && this.instalado === true) {
            alert(`"${this.titulo}" se ha cerrado`);
            this.abierto = false;
        } else if (this.abierto === false && this.instalado === true) {
            alert(`La aplicación "${this.titulo}" ya esta cerrada`);
        } else {
            alert(`Como vas a cerrar una APP que no tienes boludo`);
        }
    }

    desintalar = () => this.instalado ? (alert(`"${this.titulo}" se ha desintalado de su dispositivo`), this.abierto = false, this.instalado = false) : alert(`Esta aplicación no se encuentra en su dispositivo`);

    detallesApp = (letraColor) => {
        const styleColor = `<b style="color: ${letraColor};">`;
        appsDiv.innerHTML += 
        `<br><br>
        Titulo: ${styleColor} ${this.titulo}</b> <br>
        Descargas: ${styleColor} ${this.descargas}</b> <br>
        Estrellas: ${styleColor} ${this.estrellas}⭐</b> <br>
        Peso: ${styleColor} ${this.peso}</b> <br>
        `;
    };

    funcionesApp = (color) => {
        this.detallesApp(color)
        appsDiv.innerHTML += `
        <div>
            <input type="button" value="Instalar" data-install="${this.id}">
            <input type="button" value="Abrir" data-open="${this.id}">
            <input type="button" value="Cerrar" data-close="${this.id}">
            <input type="button" value="Desintalar" data-uninstall="${this.id}">
        </div>
        `;

        appsDiv.addEventListener('click', (e) => {
            if (e.target && e.target.dataset.install === this.id) {
                this.instalar();
            } else if (e.target && e.target.dataset.open === this.id) {
                this.abrir();
            } else if (e.target && e.target.dataset.close === this.id) {
                this.cerrar();
            } else if (e.target && e.target.dataset.uninstall === this.id) {
                this.desintalar();
            };
        });
    };
};

const app1 = new AppPOO("1", "Free Fire", "Más de 1000M", "4.3", "500 MB");
const app2 = new AppPOO("2", "Mario Kart Tour", "Más de 100M", "4.1", "120 MB");
const app3 = new AppPOO("3", "Candy Crush Saga", "Más de 1000M", "4.7", "89 MB");
const app4 = new AppPOO("4", "FIFA Fútbol", "Más de 100M", "4.5", "713 MB");
const app5 = new AppPOO("5", "Call of Duty: Mobile", "Más de 500M", "4.5", "2.2 GB");
const app6 = new AppPOO("6", "Apex Legends Mobile", "Más de 10M", "4.7", "3.8 GB");
const app7 = new AppPOO("7", "PUBG MOBILE", "Más de 500M", "4.1", "754 MB");

app1.funcionesApp("lightsalmon");
app2.funcionesApp("red");
app3.funcionesApp("pink");
app4.funcionesApp("blue");
app5.funcionesApp("yellow");
app6.funcionesApp("lightgreen");
app7.funcionesApp("lightskyblue");



//^ ----------------------------------- 
//^ -        METODOS DE CADENAS       - 
//^ ----------------------------------- 


//^ ----- ----- 44.- concat() junta 2 o mas cadenas y retorna una nueva ----- ----- 

let cadena = new String("cadena de prueba prueba");
let cadena2 = "cadena";
let resultado = cadena.concat(cadena2);

document.write(br, resultado);


//^ ----- ----- 45.- starsWith() para que si una cadena empieza con los caracteres de otra cadena devuelve true, si no devuelve false ----- ----- 

//^ ----- ----- 45,1.- endsWith() para ver si la cadena termina con los caracteres otra cadena ----- ----- 

document.write(br, cadena.startsWith(cadena2))


//^ ----- ----- 46.- includes() para buscar si una cadena se encuentra dentro de otra cadena. Devolvera true o false ----- ----- 

document.write(br, cadena.includes("de prue"))


//^ ----- ----- 47.- indexOf() nos devolvera la posición del primer caracter de una cadena de texto ----- ----- 

//^ ----- ----- 47,1.- Si la palabra no se encuentra devolvera "-1" ----- ----- 


document.write(br, cadena.indexOf("prueba"));


//^ ----- ----- 48.- lastIndexOf() nos devolvera la posición del primer caracter PERO recorriendo desde atras hacia adelante de la cadena te texto ----- ----- 


document.write(br, "último last Index Of: " + cadena.lastIndexOf("prueba"));


//^ ----- ----- 49.-  ----- ----- 


