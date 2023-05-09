// La interfaz sirve para generar la estructura de un objeto o definir un contrato para una clase. Lo que se hace desde el interface se debe cumplir en las clases 
// definir un contrato para una clase, entre la interfaz y la clase
// Por defecto en una interfaz todo es publico - no permite modificadores de acceso

enum Rol{
    Junior,
    Middle,
    Senior
}

enum TipoContrato{
    Indefinido,
    terminoFijo,
}


// Definir un contrato para una clase
interface IContrato {

    // Propiedades opcionales - No es obligatorio que quien implemente escriba estas propiedades 
    salario?: number;
    fechaInicio?: Date;

    // Propiedades obligatorias - Deben escribirse en la implementación
    role: Rol

    // Solo se crea la firma de los métodos, quien implemente de definir su funcionalidad 
    pagar():number;
    suspender(cantidad: number):void,

    // Métodos opcionales
    cancelar?(): void;
}

// Entre interfaces solo se puede hacer herencia
interface IClausula{
    cumplirObjetivos(): boolean;
}

interface IClausulaJunior {
    levantarManoATiempo(): boolean
}

interface IClausulaMedium{
    apoyarProcesosCriticos(): boolean;
}

interface IClausulaSenior{
    apoyarFormacion(): boolean;
}

class ContratoUltraCredit implements IContrato {

    // Atributos que debo tener de la interface ContratoJunior

    role: Rol;
    salario?: number | undefined;

    // Atributos propios
    tipoContrato: TipoContrato; 

    constructor(){
        this.tipoContrato = TipoContrato.Indefinido
        this.role = Rol.Junior
    }

    pagar(): number {
        return 100000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} días`);
        console.log('Información del contrato');
        // ?? Nullish coalescing operator - Valida que la expresión de la izquierda sea diferente 
        // de Null o Undefined. Si es null o undefined, devolverá la expresión de la derecha, 
        // de lo contrario devolverá el valor de la izquierda
        console.log(`Tu salario es: ${this.salario ?? 1000}`);
        // Validando null, undefined, 0, NaN
        console.log(`Tu salario es: ${this.salario ? this.salario : 1000}`);
    }

}

class ContratoGlobal implements IClausulaJunior,IClausulaMedium,IClausulaSenior{
    salario?: number | undefined;
    fechaInicio?: Date | undefined;
    role: Rol;

    constructor(){
        this.role = Rol.Middle
    }
    apoyarFormacion(): boolean {
        throw new Error("Method not implemented.");
    }
    apoyarProcesosCriticos(): boolean {
        throw new Error("Method not implemented.");
    }
    levantarManoATiempo(): boolean {
        throw new Error("Method not implemented.");
    }
    cumplirObjetivos(): boolean {
        throw new Error("Method not implemented.");
    }
    pagar(): number {
        return 20000
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido por: ${cantidad} meses`)
    }
    cancelar?(): void {
        console.log('Contrato Cancelado')
    }
}

// Son dos objetos de diferentes clases (Implementaciones) que pertenecen a la misma interfaz (IContrato) 
// Polimorfismo por interface
const contratoJuan: IContrato = new ContratoGlobal()
const contratoAndres: IContrato = new ContratoUltraCredit()

const listaContratos = [contratoAndres, contratoJuan];

listaContratos.forEach((contrato:IContrato) => {
    console.log('==============')
    contrato.suspender(3);
    console.log(typeof contrato)

    if (contrato instanceof ContratoUltraCredit){
        console.log(contrato.tipoContrato)
    }else if (contrato instanceof ContratoGlobal){
        contrato.cancelar!();
    }
    console.log('==============')
});

