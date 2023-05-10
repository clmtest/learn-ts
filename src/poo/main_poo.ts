import { Hombre } from "./hombres_poo";
import { IPersona } from "./ipersona_poo";
import { Mujer } from "./mujer_poo";

// Creamos Objetos

const hombre1: IPersona = new Hombre('CHRISTIAN', 'LONDONO'); // Clase del objeto Hombre
hombre1.edad = 30;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre(); // Por la validación seria nombre vació
hombre2.edad = 20;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juan Jose Perez'); 
hombre3.edad = 20;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre(undefined, 'Londono'); 
hombre4.edad = 20;
hombre4.nombre_completo();

// const mujer1: IPersona = new Mujer() 
// mujer1.nombre = 'Maria'
