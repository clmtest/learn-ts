import { IPersona } from "./ipersona_poo";


export class Mujer implements IPersona{
    nombre!: string;
    apellido!: string;
    edad!: number;

    nombre_completo(): string {
        return this.nombre, this.apellido
    }

    ir_cine(sala:string, pelicula:string){
        console.log(`Viendo ${pelicula} en ${sala}`)
    }

}

