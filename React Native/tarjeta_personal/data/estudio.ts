export interface Estudio {
  logo: string;
  posicion: string;
  empresa: string;
  fecha: string;
  locacion: string;
  tecnologias: string;
}

export const estudio: Estudio[] = [
  {
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",
    posicion: "React Native",
    empresa: "ComIT",
    fecha: "2025",
    locacion: "LATAM",
    tecnologias: "React Native, JavaScript, TypeScript, Jest, Github",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_unad_color.png/776px-Logo_unad_color.png",
    posicion: "Python",
    empresa: "UNAD - CISCO",
    fecha: "2025", 
    locacion: "Remote",
    tecnologias: "Python",
  }

];