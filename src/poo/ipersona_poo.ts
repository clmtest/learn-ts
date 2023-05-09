interface IPersona { // En una interfaz todo es publico, no se necesita el public
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;
}

