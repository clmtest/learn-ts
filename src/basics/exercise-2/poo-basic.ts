// Forma común de crear una clase

class Auto {
    // Atributos o Propiedades de la clase 
    color: string = 'negro' // Inicializar directamente (Evitar, no es buena practica)
    puertas: number; // Inicializar en el constructor
    marca?: string; // Significa que es opcional - Desde el objeto se debe mandar la marca

    // Inicializar propiedades de la clase Auto - Método que se ejecuta al realizar una instancia de la clase
    constructor(marca?:string){ // Recibe un parámetro que puede ser opcional (?), si quitamos el (?), lo volvemos obligatorio
        this.puertas = 4 // Con This, accedo a todas las propiedades y métodos de la clase
        this.color = 'negro' //Inicializar las propiedades
        this.marca = marca;
    }

    //Métodos de la clase
    acelerar(){
        console.log('acelerando')
    }

    frenar(){
        console.log('frenando')
    }

    prender(){
        console.log('prendiendo')
    }
}

let ferrari: Auto = new Auto(); // Instancia de la clase Auto - Objeto
console.log(ferrari);
console.log(ferrari.marca);
ferrari.marca = 'Ferrari';
console.log(ferrari);
ferrari.color = 'blanco';
console.log(ferrari);

let lambo = new Auto('Lamborghini');
console.log(lambo);
lambo.puertas = 2;
lambo.color = 'Exotico';
console.log(lambo)



class Auto2 {

    // Encapsulamiento = Modificadores de acceso
    // Publico: lo que cualquiera puede ver al crear la instancia de una clase 
    // Protegido: lo que solo puede ver la clase y quien herede de esa clase 
    // Privado Lo que una clase no expone y única y exclusivamente puede ser visto por la clase 

    color: string = 'Negro'; // Implícita - Por defecto es publico 
    public puertas: number; // Manera explicita de decir que es publico 

    //En el constructor yo puedo crear propiedades de una clase 
    //Si y solo si tienen el modificador de acceso (Public, Private, Protected)
    // Los parámetros que son opcionales siempre deben it al final de cualquier método o función
    // en este caso el constructor es un método
    constructor(public peso: number, public marca?: string){ // Opcional siempre debe ir al final
        this.puertas = 4
        this.encender();
    }

    apagar(){
        console.log('apagando')
    }

    private encender(){
        console.log(`Bienvenido ${this.marca}, tu color es: ${this.color}, tu peso es: ${this.peso} y tienes ${this.puertas} puertas`)
    }
}

let ford = new Auto2(500, 'ford')
console.log(ford)
ford.apagar() // Llamar al metodo por fuera 

