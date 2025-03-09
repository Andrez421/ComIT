export interface Proyecto {
  logo: string;
  proyecto: string;
  descripcion: string;
  tecnologias: string;
}

export const proyectos: Proyecto[] = [
  {
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",
    proyecto: "Tarjeta Personal",
    descripcion: "Proyecto de tarjeta personal en React Native",
    tecnologias: "React Native, JavaScript, TypeScript, Github",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_unad_color.png/776px-Logo_unad_color.png",
    proyecto: "Automatizacion de Informes GC",
    descripcion: "Proyecto de automatizacion de informes GC",
    tecnologias: "Python",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_unad_color.png/776px-Logo_unad_color.png",
    proyecto: "DB Esquema Redes Sena Regional Cauca",
    descripcion: "Proyecto de base de datos de esquema redes SENA regional Cauca",
    tecnologias: "Python, SQL",
  }
];