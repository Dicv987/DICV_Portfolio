const navbar = {
  en: {
    home: 'Home',
    scroll: 'Scroll to see more',
    projects: 'My Projects',
    about: 'About Me',
    contact: 'Contact Me',
    profile: 'Cano Dev',
    greeting: 'Hi, Diego Cano here👋🏻',
    fullstack: 'FULLSTACK',
    based: 'Based in',
    location: 'Aguascalientes, Mexico',
    developer: 'DEVELOPER',
    connect: "Let's Connect",
    student: '& - AI ENGINEER',
    university: 'Universidad Panamericana',
    resume: 'Resume',
    continue: 'See More',
    experienceTitle: 'My experience',
    workTab: 'Work',
    educationTab: 'Education',
    job1: {
      company: 'Grupo Texe (Terrazza Italiana)',
      position: 'Software Developer',
      period: 'October 2023 - Present',
      responsibilities: [
        'Designed and implemented a DataWarehouse solution to centralize data from 9 sales points across multiple brands, enhancing accessibility and reporting accuracy.',
        'Designed and implemented custom dashboards in Looker Studio and Retool, enhancing data visualization for operational insights; developed attendance tracking software on-site',
        'Automated daily sales reporting to executives via WhatsApp, streamlining communication and decision-making',
      ],
    },
    job2: {
      company: 'Max4Technologies',
      position: 'Intern Developer',
      period: 'January 2023 - October 2023',
      responsibilities: [
        'Built responsive static websites in React for multiple clients, optimizing user experience and brand presence',
        'Developed and launched a mobile app in React Native and Laravel for internal scheduling of mechanic appointments, enhancing operational efficiency',
      ],
    },
    study1: {
      university: 'Universidad Panamericana',
      degree: 'Bachelor of Artificial Intelligence Engineering',
      period: 'January 2022 - Present',
      achievments: [
        'Won the 2022 Hackathon with a team project that used computer vision to detect sign language and translate it into text and speech',
        'Developed a website and a unity game for the 2023 F1 in Schools competition for the university team',
        'GPA: 8.5/10',
      ],
    },
    study2: {
      university: 'Tecnológico de Monterrey',
      degree: 'High School Diploma',
      period: 'August 2018 - June 2021',
      achievments: [
        'Member of the ambassador program for the school, representing the institution in various events and activities',
        'Participated in the school’s robotics team',
        'GPA: 8.9/10',
      ],
    },
    projectsData: {
      ImpresionCreativa: {
        name: "Impresion Creativa",
        description: "An integral solution for workorders and inventory management for a printing company.",
        image: "src/assets/images/Imp Creativa/imp_creativa1.png",
        images: [
          "src/assets/images/Imp Creativa/imp_creativa2.png",
          "src/assets/images/Imp Creativa/imp_creativa3.png",
          "src/assets/images/Imp Creativa/imp_creativa4.png",
        ],
        technologies: [
          { name: "Laravel", color: "#F0513F", icon: "devicon-laravel-original" },
          { name: "React", color: "#58C4DC", icon: "devicon-react-original" },
          { name: "MySQL", color: "#F29111", icon: "devicon-mysql-plain" },
          { name: "AWS", color: "gray", icon: "devicon-amazonwebservices-plain-wordmark" },
          { name: "Heroku", color: "#6762A6", icon: "devicon-heroku-original" }
        ]
      },
      Tooltrackup: {
        name: "Tooltrackup",
        description: "A fullstack WMS (Warehouse Management System) to track tools and equipment in university labs.",
        image: "src/assets/images/ToolTrackUp/tooltrackup_1.png",
        images: [
          "src/assets/images/ToolTrackUp/tooltrackup_2.png",
          "src/assets/images/ToolTrackUp/tooltrackup_3.png",
          "src/assets/images/ToolTrackUp/tooltrackup_4.png"
        ],
        technologies: [
          { name: "Laravel", color: "#F0513F", icon: "devicon-laravel-original" },
          { name: "PHP", color: "#727CAE", icon: "devicon-php-plain" },
          { name: "React", color: "#58C4DC", icon: "devicon-react-original" },
          { name: "TypeScript", color: "#232730", icon: "devicon-typescript-plain" },
          { name: "MySQL", color: "#F29111", icon: "devicon-mysql-plain" }
        ]
      },
      DataWarehouse: {
        name: "Data Bank Texe",
        description: "DataWarehouse to centralize information from 9 sales points across multiple brands, and custom dashboards for data visualization.",
        image: "src/assets/images/Texe/texe_1.png",
        images: [
          "src/assets/images/Texe/texe_2.png",
          "src/assets/images/Texe/texe_3.png",
          "src/assets/images/Texe/texe_4.png",
        ],
        technologies: [
          { name: "SQL Server", color: "#9A0C12", icon: "devicon-microsoftsqlserver-plain" },
          { name: "Looker Studio", color: "#3F7EEC", icon: "devicon-google-plain" },
          { name: "Retool", color: "#F29111", icon: "devicon--plain" }
        ]
      },
      Max4CarCare: {
        name: "Max4CarCare",
        description: "A fullstack solution to manage appointments and services for Max4Technologies car fleet.",
        image: "src/assets/images/Max4CarCare/max4carcare_1.png",
        images: [
          "src/assets/images/Max4CarCare/max4carcare_2.png",
          "src/assets/images/Max4CarCare/max4carcare_3.png",
        ],
        technologies: [
          { name: "Figma", color: "#9A53F5", icon: "devicon-figma-plain" },
          { name: "Laravel", color: "#F0513F", icon: "devicon-laravel-original" },
          { name: "React", color: "#58C4DC", icon: "devicon-react-original" },
          { name: "Tailwind", color: "#38BDF8", icon: "devicon-tailwindcss-original" },
          { name: "Firebase", color: "#F29111", icon: "devicon-firebase-plain" },
        ]
      }
    },
    myStack: 'My Stack',
    myStackDescription: 'Here are some of the technologies I have worked with along my career',
    copyright: 'All rights reserved'
  },
  es: {
    home: 'Inicio',
    scroll: 'Baja para conocer más',
    projects: 'Mis Proyectos',
    about: 'Sobre Mí',
    contact: 'Contáctame',
    profile: 'Cano Dev',
    greeting: 'Hola, soy Diego Cano 👋🏻',
    fullstack: 'PROGRAMADOR',
    based: 'Ubicado en',
    location: 'Aguascalientes, México',
    developer: 'FULLSTACK',
    connect: 'Conectemos',
    student: '& - INGENIERO EN IA',
    university: 'Universidad Panamericana',
    resume: 'Currículum',
    continue: 'Ver Más',
    experienceTitle: 'Mi experiencia',
    workTab: 'Trabajo',
    educationTab: 'Educación',
    job1: {
      company: 'Grupo Texe (Terrazza Italiana)',
      position: 'Desarrollador de Software',
      period: 'Octubre 2023 - Presente',
      responsibilities: [
        'Diseñé e implementé una solución de DataWarehouse para centralizar datos de 9 puntos de venta de varias marcas, mejorando la accesibilidad y la precisión de los reportes.',
        'Diseñé e implementé dashboards personalizados en Looker Studio y Retool, optimizando la visualización de datos para análisis operativo; desarrollé software de asistencia en sitio.',
        'Automatización de reportes diarios de ventas a ejecutivos vía WhatsApp, facilitando la comunicación y la toma de decisiones.',
      ],
    },
    job2: {
      company: 'Max4Technologies',
      position: 'Desarrollador Interno',
      period: 'Enero 2023 - Octubre 2023',
      responsibilities: [
        'Construí sitios web estáticos responsivos con React para varios clientes, optimizando la experiencia de usuario y la presencia de marca.',
        'Desarrollé y lancé una aplicación móvil en React Native y Laravel para la programación interna de citas mecánicas, mejorando la eficiencia operativa.',
      ],
    },
    study1: {
      university: 'Universidad Panamericana',
      degree: 'Licenciatura en Ingeniería en Inteligencia Artificial',
      period: 'Enero 2022 - Presente',
      achievments: [
        'Gané el Hackathon 2022 con un proyecto de equipo que utilizaba visión por computadora para detectar lenguaje de señas y traducirlo a texto y voz.',
        'Desarrollé un sitio web y un juego de unity para la competencia F1 in Schools 2023 para el equipo de la universidad.',
        'Promedio: 8.5/10',
      ],
    },
    study2: {
      university: 'Tecnológico de Monterrey',
      degree: 'Diploma de Preparatoria',
      period: 'Agosto 2018 - Junio 2021',
      achievments: [
        'Miembro del programa de embajadores de la escuela, representando a la institución en varios eventos y actividades.',
        'Participé en el equipo de robótica de la escuela.',
        'Promedio: 8.9/10',
      ],
    },
    projectsData: {
      ImpresionCreativa: {
        name: "Impresion Creativa",
        description: "Una solución integral para órdenes de trabajo y gestión de inventario para una empresa de impresión.",
        image: "src/assets/images/Imp Creativa/imp_creativa1.png",
        images: [
          "src/assets/images/Imp Creativa/imp_creativa2.png",
          "src/assets/images/Imp Creativa/imp_creativa3.png",
          "src/assets/images/Imp Creativa/imp_creativa4.png"
        ],
        technologies: [
          { name: "Laravel", color: "#F0513F", icon: "devicon-laravel-original" },
          { name: "React", color: "#58C4DC", icon: "devicon-react-original" },
          { name: "MySQL", color: "#F29111", icon: "devicon-mysql-plain" },
          { name: "AWS", color: "gray", icon: "devicon-amazonwebservices-plain-wordmark" },
          { name: "Heroku", color: "#6762A6", icon: "devicon-heroku-original" }
        ]
      },
      Tooltrackup: {
        name: "Tooltrackup",
        description: "Un WMS (Warehouse Management System) fullstack para rastrear herramientas y equipo en laboratorios universitarios.",
        image: "src/assets/images/ToolTrackUp/tooltrackup_1.png",
        images: [
          "src/assets/images/ToolTrackUp/tooltrackup_2.png",
          "src/assets/images/ToolTrackUp/tooltrackup_3.png",
          "src/assets/images/ToolTrackUp/tooltrackup_4.png"
        ],
        technologies: [
          { name: "Laravel", color: "#F0513F", icon: "devicon-laravel-original" },
          { name: "PHP", color: "#727CAE", icon: "devicon-php-plain" },
          { name: "React", color: "#58C4DC", icon: "devicon-react-original" },
          { name: "TypeScript", color: "#232730", icon: "devicon-typescript-plain" },
          { name: "MySQL", color: "#F29111", icon: "devicon-mysql-plain" }
        ]
      },
      DataWarehouse: {
        name: "Data Bank Texe",
        description: "DataWarehouse para centralizar información de 9 puntos de venta de múltiples marcas, y dashboards personalizados para visualización de datos.",
        image: "src/assets/images/Texe/texe_1.png",
        images: [
          "src/assets/images/Texe/texe_2.png",
          "src/assets/images/Texe/texe_3.png",
          "src/assets/images/Texe/texe_4.png"
        ],
        technologies: [
          { name: "SQL Server", color: "#9A0C12", icon: "devicon-microsoftsqlserver-plain" },
          { name: "Looker Studio", color: "#3F7EEC", icon: "devicon-google-plain" },
          { name: "Retool", color: "#F29111", icon: "devicon--plain" }
        ]
      },
      Max4CarCare: {
        name: "Max4CarCare",
        description: "Una solución fullstack para gestionar citas y servicios de la flota de autos de Max4Technologies.",
        image: "src/assets/images/Max4CarCare/max4carcare_1.png",
        images: [
          "src/assets/images/Max4CarCare/max4carcare_2.png",
          "src/assets/images/Max4CarCare/max4carcare_3.png"
        ],
        technologies: [
          { name: "Figma", color: "#9A53F5", icon: "devicon-figma-plain" },
          { name: "Laravel", color: "#F0513F", icon: "devicon-laravel-original" },
          { name: "React", color: "#58C4DC", icon: "devicon-react-original" },
          { name: "Tailwind", color: "#38BDF8", icon: "devicon-tailwindcss-original" },
          { name: "Firebase", color: "#F29111", icon: "devicon-firebase-plain" }
        ]
      }
    },
    myStack: 'Tecnologías',
    myStackDescription: 'Aquí están algunas de las tecnologías con las que he trabajado a lo largo de mi carrera',
    copyright: 'Todos los derechos reservados'
  }
};
export default navbar;
