import { IPersona } from './ipersona_poo';

enum persona {
    nombre = 'CHRISTIAN',
    apellido = 'LONDONO',
    edad = 30
}

export class Hombre implements IPersona{
    nombre: string;
    apellido: string;
    edad: number;
    
    constructor(nombre?:string, apellido?:string){
        this.nombre = persona.nombre
        this.apellido = persona.apellido
        this.edad = persona.edad
    }

    nombre_completo(): string {
        return this.nombre, this.apellido
    }

    hablar_futbol(equipo:string,minutos:number):void{
        console.log(`Hablemos sobre el ${equipo} ${minutos} pues esta jugando como los Dioses`)
    }
}