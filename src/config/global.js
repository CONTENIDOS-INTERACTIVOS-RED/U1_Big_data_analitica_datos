export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a Big Data',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de <i>Big Data</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas y tecnologías para Big Data',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a Hadoop',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Spark como herramienta de procesamiento en tiempo real',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Bases de datos NoSQL',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castillo Romero, J. A. (2019). <i>Big Data</i>. IFCT 128P. IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/124254',
    },
    {
      referencia:
        'López Garzón, W. F. & Cárdenas López, J. C. (2019). Tecnología <i>internet of things</i> (IoT) y el <i>Big Data</i>. Mare Ingenii. Ingenierías, 1(1), pp. 74-79. Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127847',
    },
    {
      referencia:
        'Nin, J. (2016). <i>Big Data</i>: análisis de datos en entornos masivos. Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/117744',
    },
  ],
  glosario: [
    {
      termino: 'Analítica predictiva',
      significado:
        'Técnica que utiliza datos históricos y modelos estadísticos, para predecir eventos futuros.',
    },
    {
      termino: 'Analítica prescriptiva',
      significado:
        'Proceso que genera acciones específicas basadas en los análisis predictivos y descriptivos.',
    },
    {
      termino: 'Analítica descriptiva',
      significado:
        'Proceso que analiza datos históricos y comprende múltiples patrones.',
    },
    {
      termino: '<i>Big Data</i>',
      significado:
        'Conjunto de datos grandes, complejos y variados, que requieren nuevas tecnologías y herramientas para su procesamiento.',
    },
    {
      termino: 'Hadoop',
      significado:
        'Plataforma de <i>software</i> de código abierto, diseñada para el almacenamiento y procesamiento distribuido de grandes volúmenes de datos.',
    },
    {
      termino: 'HDFS (<i>Hadoop Distributed File System</i>)',
      significado:
        'Sistema de archivos distribuidos que almacena datos en múltiples servidores, asegurando escalabilidad y tolerancia a fallos.',
    },
    {
      termino: '<i>MapReduce</i>',
      significado:
        'Modelo de programación utilizado por Hadoop para procesar grandes conjuntos de datos de manera distribuida.',
    },
    {
      termino: 'MongoDB',
      significado:
        'Base de datos NoSQL orientada a documentos que utiliza JSON para el almacenamiento de datos.',
    },
    {
      termino: 'NoSQL',
      significado:
        'Tipo de base de datos diseñada para manejar grandes volúmenes de datos no estructurados o semiestructurados.',
    },
    {
      termino: 'Power BI',
      significado:
        'Herramienta de Microsoft para visualización y análisis de datos, útil en la toma de decisiones empresariales.',
    },
    {
      termino: '<i>Spark</i>',
      significado:
        'Plataforma de procesamiento de datos, en tiempo real, que opera sobre datos para acelerar el análisis.',
    },
    {
      termino: 'SQL (<i>Structured Query Language</i>)',
      significado:
        'Lenguaje utilizado para gestionar y consultar bases de datos relacionales.',
    },
    {
      termino: 'Tableau',
      significado:
        'Herramienta de visualización que permite transformar datos en gráficos interactivos y <i>dashboards</i>.',
    },
    {
      termino: 'Variedad',
      significado:
        'Característica de <i>Big Data</i> que se refiere a los diferentes formatos de datos, incluyendo estructurados y no estructurados.',
    },
    {
      termino: 'Velocidad',
      significado:
        'Propiedad de <i>Big Data</i> que mide la rapidez con la que se generan y procesan los datos.',
    },
    {
      termino: 'Veracidad',
      significado:
        'Calidad y confiabilidad de los datos, esencial para tomar decisiones informadas.',
    },
    {
      termino: 'Valor',
      significado:
        'Capacidad de los datos para proporcionar información útil y relevante.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de datos para facilitar su análisis y comprensión.',
    },
    {
      termino: 'Volumen',
      significado:
        'Cantidad masiva de datos que caracteriza a <i>Big Data</i>.',
    },
    {
      termino: 'Qlik',
      significado:
        'Plataforma de visualización y análisis de datos utilizada para crear sistemas interactivos.',
    },
  ],
  complementario: [],
}
