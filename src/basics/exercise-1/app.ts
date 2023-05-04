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

// Any

let working: any = 35 // No es una buena practica
working = 'hola';

// Funciones

// function nombreFunction (parámetro: tipoDato): tipoDato Que Retorna función
function validateValue(value:unknown): boolean {

    // unknown que es un tipo de dato que es desconocido
    // para cualquier validación que deba hacer con el dato
    // debo primero saber o validar que tipo de dato es
    if(typeof value === 'string'){
        console.log(value.trim().toUpperCase())
    }else if (typeof value === 'number'){
        console.log(value.toFixed());
    }

    if(value === ''){
        return false;
    } else {
        return true;
    }
}

function getFullName (firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

console.log(getFullName(firstName, lastName));

// Void

function processResponse(saved: boolean): void {

}

enum Role{
    Admin,
    Client,
    Users,
    SuperAdmin
}
let users: Array< {name: string, role: Role} > = [
    {
        name:'pepito',
        role: Role.Admin
    },
    {
        name: 'juanito',
        role: Role.Client
    },
    {
        name: 'panda',
        role: Role.Client
    }
]

console.log( users.filter((user) => user.role === Role.Client));


