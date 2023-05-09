// ! Typescript deje de joder, que yo me encargo

class Animal {
    color!:string;
    especie!:string;
    peso!:number;
    tamanio!:string;

    constructor(){
        console.log('creando un animal')
    }

    alimentarse():void{
        console.log('Alimentándose');
    }
}

// La herencia se da, gracias a la palabra reservada extends 
class Gato extends Animal {

    constructor(){
        super();

        console.log('Creando un gato a partir de animal');
        
    }

}

