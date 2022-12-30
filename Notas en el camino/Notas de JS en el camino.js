

//^ ----------------------------------- 
//^ -     Notas de JS en el camino    - 
//^ ----------------------------------- 


//^ ----- ----- 1.- usar number('string') para convertir un string a numero ----- ----- 


//^ ----- ----- 2.- usar Object.entries('objeto') para que nos devuelva un array de arrays, el sub-array tendra la clave y el valor ----- ----- 

//^ ----- ----- 2,1.- podemos usar un map o un foreach(([key, value]) => {}) para recorrer el array inicial, destructurar el sub-array y devolver sus valores y claves ----- ----- 

//^ ----- ----- 2,2.- Probar Object.keys y Object.values ----- ----- 


//^ ----- ----- 3.- usar .slice(-1) para obtener el ultimo caracter de un array, y usar .slice(0, -1) para eliminarlo ----- ----- 


//^ ----- ----- 4.- usar / / para encerrar una expresión regular. Ejemplo: "/[*/+-]/" ----- ----- 

//^ ----- ----- 5.- podemos usar el metodo expReg.exec('array') junto con una expresion regular antes del metodo y el array como parametro y nos devolvera un array con los caracteres que tengamos en la expresion regular y su posición  ----- ----- 

//^ ----- ----- 5,1.-    .exec() ----- ----- 


//^ ----- ----- 6.- podemos usar tiempo relativo con la API de JS: const variable = new Intl.RelativeTimeFormat("es") con el texto en español ----- ----- 

//^ ----- ----- 6,1.- y con variable.format(-10, "minutes") nos devolvera un texto diciendo "dentro de 10 minutos", se puede aplciar para segundos, horas, semanas etc  ----- ----- 

//^ ----- ----- 6,2.- si le pasamos un numero negativo nos devolvera "hace 10 minutos" ----- ----- 


//^ ----- ----- 7.- usar beta.reactjs.org para encontrar mejor documentación de react ----- ----- 


//^ ----- ----- 8.- hay 5 formas de crear objetos ----- ----- 

//^ ----- ----- 8,1.- con el constructor de objeto new: const miObj = new Object(); ----- ----- 

//^ ----- ----- 8,2.- con el literal de objetos, inicializador, object literal: ----- ----- 

//* const miObj = {
//*     tittle: "Aprendiendo JavaScript",
//*     pages: 100
//* }

//^ ----- ----- 8,3.- utilizando una función constructora: ----- ----- 