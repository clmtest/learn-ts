const teacher = {
    name: 'Yhoan',
    lastName: 'Galeano'
};

console.log('Teacher', teacher);

// Primitivos

// Booleans:

// Declaración implícita 
const isTeacher = true; // Toma el valor con el cual fue declarado y ese es el tipo 
let isPlayer = true;// Tomo el tipo del valor que le fue asignado 

// Declaración Explicita
const hasError: boolean = false;
let isChampion: boolean = false;

let result = hasError ? 'tiene errores' : 'no tiene errores';

// Strings
const firstName = 'Christian';
const lastName = 'Londono';

let fullName: string = `Su nombre es ${firstName} ${lastName}, bienvenido` // `` Interpolar
console.log(fullName.toUpperCase())

// Number
let countStudents: number = 29;
let average: number = 4.5;

console.log(average.toFixed())

// Tipo Objeto:

//Array
let fruits = ['pear','apple'];
let sports: string[] = ['soccer','basketball']; // Limito a que sean solo strings 
let students: Array<string> = ['Christian','Ramon'];

type stringOrNull = string | null; // Generamos un tipo de dato

// Union types
let brands: Array<string | null> = ['BMW','MERCEDES', null, 'ferrari', null, 'nissan'];// | se le llama union types
console.log( brands.filter((brands) => brands !== null));

// Tuples
let exampleTuple:[string, null] = ['hola', null];

// Tipos personalizados
type statusCode = 'active' | 'inactive'

let studentStatus:statusCode = 'inactive';

