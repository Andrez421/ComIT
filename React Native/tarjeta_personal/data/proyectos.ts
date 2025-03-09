export interface Proyecto {
  logo: any; // Changed from string to any to support both require() and local images
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
    descripcion: "Proyecto de automatizacion de informes GC",
    tecnologias: "Python",
  },
  {
    logo: require("@/assets/images/dbRedes.png"),
    proyecto: "DB Esquema Redes Sena Regional Cauca",
    descripcion: "Proyecto de base de datos de esquema redes SENA regional Cauca",
    tecnologias: "Python, SQL",
  }
];