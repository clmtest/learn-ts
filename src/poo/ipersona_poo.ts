
// El read only solo permite que la propiedad sea inicializada en el constructor
// Fuera del constructor, solo se puede leer el valor en caso de asignarle un valor 
// fuera del constructor, typescript generaría un error (Ver Mujer en main)

export interface IPersona { // En una interfaz todo es publico, no se necesita el public
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;
}

