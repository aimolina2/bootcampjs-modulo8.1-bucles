type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1: a. Lista de pacientes asignados a Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
  }
  return pacientesPediatria;
};

console.log(
  "Pacientes asignados a Pediatría:",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Apartado 1: b. Lista de pacientes asignados a Pediatría y menores de 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatriaMenoresDeDiezAnios = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenoresDeDiezAnios.push(pacientes[i]);
    }
  }
  return pacientesPediatriaMenoresDeDiezAnios;
};
console.log(
  "Pacientes asignados a Pediatría y menores de 10 años:",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// Apartado 2: Activar protocolo de urgencia si el ritmo cardiaco es superior a 100 p/m o la temperatura corporal es superior a 39º

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }

  return activarProctolo;
};

console.log(
  "Hay que activar el protocolo de urgencia:",
  activarProtocoloUrgencia(pacientes)
);

// Apartado 3: Reasignr los pacientes de Pediatría a Médico de Familia

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
  let nuevoListadoConPacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      nuevoListadoConPacientesReasignados.push({
        ...pacientes[i],
        especialidad: "Medico de familia",
      });
    } else {
      nuevoListadoConPacientesReasignados.push(pacientes[i]);
    }
  }
  return nuevoListadoConPacientesReasignados;
};

console.log(
  "Pacientes reasignados a Médico de Familia:",
  reasignaPacientesAMedicoFamilia(pacientes)
);
