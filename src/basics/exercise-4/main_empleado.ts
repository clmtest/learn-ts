import { Empleado } from "./empleado";
import { EmpleadoPorHora } from "./empleado_hora";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { TipoEmpleado } from "./tipo_empleado.enum";

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    'CHRISTIAN LONDONO',
    123,
    1500000
)

// Cast
console.log('CAST1', (empleadoTiempoCompleto as EmpleadoTiempoCompleto).salarioMensual); // Cast: convertir un objeto en algo que el objeto ya es

// Cast
console.log('CAST2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual);

empleadoTiempoCompleto.mostrarInformacion()
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`)

if(empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto){
    console.log(empleadoTiempoCompleto.salarioMensual)
}

const empleadoPorHora = new  EmpleadoPorHora(
    'JUAN PEREZ',
    456,
    TipoEmpleado.POR_HORA,
    2000000,
    5
);

empleadoPorHora.mostrarInformacion()
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`)
console.log(empleadoPorHora.horasTrabajadas)
console.log()