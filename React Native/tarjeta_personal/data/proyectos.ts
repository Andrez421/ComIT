export interface Proyecto {
  logo: any; 
  proyecto: string;
  descripcion: string;
  tecnologias: string;
}

export const proyectos: Proyecto[] = [
  {
    logo: require("@/assets/images/tarjetaPersonal.png"),
    proyecto: "Tarjeta Personal",
    descripcion: "Proyecto de tarjeta personal en React Native",
    tecnologias: "React Native, JavaScript, TypeScript, Github",
  },
  {
    logo: require("@/assets/images/GeneradorInformes.png"),
    proyecto: "Automatizacion de Informes GC",
    descripcion: "Proyecto de automatizacion de informes GC para el Sena CCyS RC",
    tecnologias: "Python, Powershell",
  },
  {
    logo: require("@/assets/images/dbRedes.png"),
    proyecto: "DB Esquema Redes Sena Regional Cauca",
    descripcion: "Proyecto de Database - UI para el esquema y control de Red en Sena CCyS RC",
    tecnologias: "Python - Tkinter, SQLite",
  }
];