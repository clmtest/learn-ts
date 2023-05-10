import { IPersona } from "./ipersona_poo";


export class Mujer implements IPersona{
    public nombre!: string;
    public apellido!: string;
    public edad!: number;

    public nombre_completo(): string {
        return this.nombre, this.apellido
    }

    public ir_cine(sala:string, pelicula:string){
        console.log(`Viendo ${pelicula} en ${sala}`)
    } 

}

