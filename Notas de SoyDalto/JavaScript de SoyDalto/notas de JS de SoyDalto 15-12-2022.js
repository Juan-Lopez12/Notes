

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

let nombrePrompt = prompt("Decime tu nombre")

document.write( "Hola! " + nombrePrompt)

