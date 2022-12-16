

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
    document.write(`<br /><br /> <b>Tu nombre es otro<b/>`);
}


