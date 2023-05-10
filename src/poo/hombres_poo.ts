import { IPersona } from './ipersona_poo';

export class Hombre implements IPersona{
    nombre: string;
    apellido: string;
    edad!: number;
    
    constructor(nombre?:string, apellido?:string){
        this.nombre = nombre ?? ''
        this.apellido = apellido ?? ''
    }

    nombre_completo(): string {
        return this.nombre, this.apellido
    }

    hablar_futbol(equipo:string,minutos:number):void{
        console.log(`Hablemos sobre el ${equipo} ${minutos} pues esta jugando como los Dioses`)
    }
}