<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Herramientas y tecnologías para <i>Big Data</i>'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .px-4.py-4.bg-color-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/2.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.my-3  El manejo eficiente de #[i Big Data] requiere no solo de una comprensión teórica, sino de herramientas tecnológicas avanzadas que permitan procesar, almacenar y analizar grandes volúmenes de datos, de manera escalable y eficiente. A continuación, se presentan dos de las tecnologías más destacadas: Hadoop y Apache Spark, explicando su arquitectura, aplicaciones y casos de uso, en diferentes industrias.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.png', alt='')

    #t_2_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.1] Introducción a Hadoop
    p.mb-4(data-aos='fade-up') Hadoop es una plataforma de código abierto, diseñada para el almacenamiento y procesamiento de grandes volúmenes de datos, de manera distribuida. Su arquitectura permite manejar tanto datos estructurados como no estructurados, y se ha convertido en una herramienta esencial para proyectos de #[i Big Data].
    h2.mb-3(data-aos='fade-up') Hadoop Distributed File System (HDFS)
    p.mb-5(data-aos='fade-up') Es el sistema de archivos distribuido de Hadoop, diseñado para almacenar grandes volúmenes de datos, en múltiples nodos, con alta redundancia.
    p.mb-5.fw-bold(data-aos='fade-up') Las características principales son:
    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Escalabilidad horizontal
              p Capacidad de agregar nodos para aumentar el almacenamiento y la potencia de procesamiento.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/3.png', alt='Imagen de escalabilidad horizontal')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Tolerancia a fallos
              p Replicación automática de datos en diferentes nodos, para garantizar su disponibilidad.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/4.png', alt='Imagen de tolerancia a fallos')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejemplo práctico
              p Una tienda en línea almacena historiales de compras y registros de usuarios en HDFS, distribuyendo los datos para garantizar acceso rápido y seguro.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/5.png', alt='Imagen de ejemplo práctico')

    .bg-full-width.bg-fondo-2.mb-0(data-aos='fade-up')
      .px-4.px-md-5.pb-md-3
        h2.mb-3 MapReduce
        p.mb-5 Es el modelo de procesamiento distribuido de Hadoop, que divide las tareas en dos etapas:
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/6.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Map
                p.mb-0.text-center Divide los datos en fragmentos procesables en paralelo.

          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/7.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Reduce
                p.mb-0.text-center Combina los resultados de las tareas Map para generar una salida final.
          
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/8.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Ejemplo práctico
                p.mb-0.text-center Una empresa de telecomunicaciones usa MapReduce, para analizar registros de llamadas y detectar patrones de uso que optimicen su infraestructura.

    p.mb-4(data-aos='fade-up') Se describen las partes claves del sistema y su función, dentro del procesamiento de grandes volúmenes de datos distribuidos.
    .bg-color-1.mb-5(data-aos='fade-up')
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5.py-4
            p.mb-0
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  span #[b HDFS.] Almacena datos distribuidos entre nodos, con tolerancia a fallos.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  span.mb-0 #[b MapReduce.] Procesa datos en paralelo, dividiendo tareas en las fases Map y Reduce.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/9.png', alt='')

    h2.mb-3(data-aos='fade-up') Casos de uso en industrias claves
    p.mb-5(data-aos='fade-up') Hadoop se ha utilizado en una amplia gama de sectores, para resolver problemas relacionados con la gestión de grandes volúmenes de datos.
    .titulo-figura.mb-2.d-d-flex(data-aos='fade-up')
      p.mb-0 #[b Tabla 1.] Aplicaciones de Hadoop por industria
    .tabla-a.color-primario.mb-5(data-aos='fade-up')
      table
        thead
          tr
            th.w-25 Industria
            th Problema
            th Solución con Hadoop
            th Impacto
        tbody
          tr
            td.fw-bold Banca y finanzas
            td.tr-br Detección de fraudes.
            td HDFS para almacenar transacciones, MapReduce para analizar patrones anómalos.
            td Mayor rapidez en la detección de fraudes y mejora en la seguridad financiera.
          tr
            td.fw-bold Salud
            td.tr-br Procesamiento de datos médicos.
            td HDFS para almacenar imágenes médicas, MapReduce para correlacionar datos de pacientes.
            td Diagnósticos más precisos y tratamientos personalizados.
          tr
            td.fw-bold Telecomunicaciones
            td.tr-br Análisis de registros de llamadas.
            td HDFS para datos de torres, MapReduce para predecir picos de tráfico.
            td Optimización de la red y mejora de la experiencia del cliente.


    #t_2_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.2] Spark como herramienta de procesamiento en tiempo real
    p.mb-3(data-aos='fade-up') #[b Apache Spark], es una plataforma de análisis distribuido, diseñada para manejar grandes volúmenes de datos con rapidez y flexibilidad. A diferencia de Hadoop, Spark puede realizar procesamiento en tiempo real, lo que lo convierte en una herramienta clave en aplicaciones críticas, como aprendizaje automático y análisis predictivo.
    p.mb-5.fw-bold(data-aos='fade-up') Las ventajas principales de Spark:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Velocidad') 
            p Procesa datos en memoria, hasta 100 veces más rápido que MapReduce.
          div(numero='2' titulo='Flexibilidad') 
            p Compatible con múltiples lenguajes de programación (Python, Java, Scala)
          div(numero='3' titulo='Capacidades Avanzadas') 
            p Incluye bibliotecas para aprendizaje automático (MLlib), procesamiento de gráficos (GraphX) y transmisión en tiempo real (Spark Streaming).
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/10.png')

    h2.mb-3(data-aos='fade-up') Ejemplo aplicado
    p.mb-4(data-aos='fade-up') Una empresa de comercio electrónico, usa Spark para procesar datos de navegación en tiempo real, ofreciendo recomendaciones personalizadas al instante.
    .titulo-figura.mb-2.d-d-flex(data-aos='fade-up')
      p.mb-0 #[b Tabla 2.] Comparativa entre Hadoop y Spark
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .tabla-a.color-primario.mb-0
          table
            thead
              tr
                th.w-25 Aspecto
                th Hadoop
                th Spark
            tbody
              tr
                td.fw-bold Velocidad
                td Procesamiento más lento con MapReduce.
                td Procesamiento en tiempo real, con Spark Streaming.
              tr
                td.fw-bold Tipo de datos
                td Enfocado en grandes lotes.
                td Admite lotes y flujos en tiempo real.
              tr
                td.fw-bold Casos de uso
                td Almacenamiento masivo y análisis por lotes.
                td Análisis predictivo, aprendizaje automático, etc.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/11.png', alt='')
    
    
    .bg-color-1.p-4.mb-5(data-aos='fade-up')
      p.mb-0 Ambas tecnologías, Hadoop y Spark, son esenciales en el ecosistema de #[i Big Data], y su aplicación combinada puede maximizar el potencial de los proyectos en diversas industrias. Estas herramientas permiten a las organizaciones, transformar datos complejos en información valiosa, facilitando decisiones informadas y estrategias efectivas.
     
    h2.mb-3(data-aos='fade-up') Comparativa entre Hadoop y Spark: velocidad y flexibilidad
    .bg-color-2.mb-5(data-aos='fade-up')
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block.mb-0
          img(src='@/assets/curso/t2/12.png', alt='')
        .col-lg
          .py-2.px-4
            p.mb-0 Hadoop y Spark, son dos de las tecnologías más utilizadas en el ecosistema de #[i Big Data], cada una diseñada para abordar necesidades específicas en el procesamiento de datos masivos. Aunque ambas son herramientas poderosas, difieren significativamente en términos de velocidad, flexibilidad y casos de uso. Mientras que Hadoop se centra en el procesamiento por lotes con su motor MapReduce, Spark destaca por su capacidad de procesamiento en memoria, lo que lo hace ideal para tareas en tiempo real. La siguiente tabla ofrece una comparación detallada entre Hadoop y Spark, destacando sus características principales y cómo se adaptan a diferentes escenarios de análisis de datos.

    .titulo-figura.mb-2.d-d-flex(data-aos='fade-up')
      p.mb-0 #[b Tabla 3.] Comparativa entre Hadoop y Spark: velocidad y flexibilidad 
    .tabla-a.color-primario.mb-5(data-aos='fade-up')
      table
        thead
          tr
            th.w-15 Criterio
            th Hadoop
            th Spark
        tbody
          tr
            td.fw-bold Velocidad
            td Procesamiento por lotes: Hadoop se basa en MapReduce, lo que significa que los datos se procesan en bloques, con múltiples etapas de lectura y escritura en disco. Esto puede hacer que sea más lento para tareas que requieren respuestas rápidas.
            td 
              p Procesamiento en memoria: Spark realiza la mayoría de las operaciones directamente en memoria (RAM), eliminando la necesidad de escribir y leer constantemente en disco. Esto lo hace hasta 100 veces más rápido que Hadoop, en ciertas tareas.
              p Capacidad para el procesamiento en tiempo real a través de Spark Streaming, una extensión que permite analizar flujos de datos continuos, casi en tiempo real.
          tr
            td.fw-bold Flexibilidad
            td Enfocado principalmente, en el procesamiento por lotes y con un modelo limitado para manejar datos en tiempo real.
            td
              p Compatible con múltiples lenguajes de programación (Scala, Python, Java, R).
              p Soporte para múltiples cargas de trabajo: análisis de datos, aprendizaje automático (MLlib), procesamiento de grafos (GraphX) y consultas SQL (Spark SQL).
              p Funciona tanto con datos por lotes como en tiempo real, lo que amplía significativamente su rango de aplicaciones.


    p.mb-4(data-aos='fade-up') Mientras que Hadoop es ideal para el almacenamiento y el procesamiento de datos por lotes a gran escala, Spark sobresale en tareas que requieren rapidez, flexibilidad y análisis en tiempo real. Muchas organizaciones combinan ambas tecnologías, utilizando Hadoop para almacenamiento (HDFS) y Spark para procesamiento ágil.
    p.mb-4(data-aos='fade-up') La capacidad de Spark para procesar flujos de datos en tiempo real, lo ha convertido en una herramienta esencial para industrias que necesitan decisiones rápidas y basadas en datos. A continuación, se presentan ejemplos destacados:

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/13.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Sistemas de recomendación')
            p.mb-4 Empresas como Netflix y Amazon utilizan Spark para analizar patrones de comportamiento en tiempo real, generando recomendaciones personalizadas de contenido o productos. Spark procesa datos como historial de visualización, búsquedas recientes y preferencias de otros usuarios similares.
            p.mb-0 #[b Impacto:] incremento en la satisfacción del cliente y en la conversión de ventas o tiempo de permanencia en la plataforma.
          
          div(titulo='Monitoreo de fraudes financieros')
            p.mb-4 En instituciones bancarias, Spark analiza transacciones financieras en tiempo real, detectando patrones anómalos que podrían indicar fraudes. Por ejemplo, combinando datos de ubicación del usuario con patrones de gasto típicos, el sistema puede bloquear automáticamente actividades sospechosas.
            p.mb-0 #[b Impacto:] reducción de pérdidas por fraude y mayor seguridad para los clientes.
          
          div(titulo='Optimización de redes de telecomunicaciones')
            p.mb-4 Las empresas de telecomunicaciones utilizan Spark Streaming, para monitorizar en tiempo real, el tráfico en sus redes, identificando congestiones o interrupciones. Con estos datos, ajustan automáticamente la capacidad de la red o redirigen el tráfico.
            p.mb-0 #[b Impacto:] mejora de la calidad del servicio y reducción de tiempos de inactividad.
          
          div(titulo='Análisis de redes sociales y sentimiento del consumidor')
            p.mb-4 Spark permite analizar millones de publicaciones en redes sociales, para detectar tendencias emergentes o cambios en la percepción de marca. Por ejemplo, en un lanzamiento de producto, las empresas pueden monitorear en tiempo real, las reacciones de los usuarios y ajustar estrategias de marketing.
            p.mb-0 #[b Impacto:] mejora en la agilidad de las campañas y en la comprensión del consumidor.

    p.mb-5(data-aos='fade-up') Estas aplicaciones no solo mejoran la eficiencia operativa y la seguridad, sino que también potencian la capacidad de adaptación en entornos dinámicos, reafirmando el valor estratégico del análisis de datos, en tiempo real, en un mundo cada vez más conectado y competitivo. 
    #t_2_3.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.3] Bases de datos NoSQL
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        p.mb-3 Las bases de datos NoSQL (Not Only SQL), han surgido como una alternativa fundamental a las bases de datos relacionales tradicionales, para enfrentar los retos asociados con #[i Big Data]. Diseñadas para manejar grandes volúmenes de datos no estructurados y semiestructurados, estas bases de datos destacan por su escalabilidad y flexibilidad, lo que las convierte en la opción preferida para aplicaciones modernas, como análisis en tiempo real, IoT y sistemas distribuidos.
        .p-3.bg-color-5.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/14.svg', style='max-width: 70px').mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  span.mb-0 Características de las bases de datos NoSQL (escalabilidad horizontal, flexibilidad de esquemas).
                li.d-flex
                  i.fas.fa-circle.icon-list
                  span.mb-0 Ejemplos de bases de datos como MongoDB y Cassandra.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/15.png', alt='')


    h2.mb-3(data-aos='fade-up') Características principales de las bases de datos NoSQL.
    p.mb-5(data-aos='fade-up') Seguidamente, se presenta una síntesis de las características principales de las bases de datos NoSQL, destacando sus diferencias fundamentales frente a las bases de datos relacionales tradicionales. Este enfoque permite comprender las fortalezas y limitaciones de las bases de datos NoSQL en diversos contextos, facilitando su elección, según las necesidades particulares de almacenamiento y procesamiento de información.
    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Escalabilidad horizontal
              p Una de las principales ventajas de NoSQL es la capacidad de escalar horizontalmente, es decir, distribuir datos y carga de trabajo en múltiples servidores (nodos), en lugar de depender de un solo servidor más grande (escalabilidad vertical). 
              p.mb-0 Además, ayuda a la reducción de costos al utilizar servidores básicos en lugar de hardware especializado, y posee mejor tolerancia a fallos: si un nodo falla, los datos están replicados en otros nodos del clúster.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/16.png', alt='Imagen de escalabilidad horizontal')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Flexibilidad de esquemas
              p A diferencia de las bases de datos relacionales, NoSQL no requiere un esquema fijo. Esto significa que los datos pueden almacenarse en diversos formatos, como documentos JSON, columnas, grafos o claves-valor. 
              p.mb-0 La adaptación a cambios dinámicos en la estructura de datos, es una de sus ventajas. Además es ideal para datos no estructurados, como imágenes, vídeos, logs de eventos y datos de sensores.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/17.png', alt='Imagen de flexibilidad de esquemas')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Alto rendimiento
              p NoSQL está diseñado para ofrecer tiempos de respuesta rápidos, incluso con grandes volúmenes de datos y altas tasas de lectura/escritura. 
              p.mb-0 Un ejemplo de ello, son las aplicaciones de redes sociales que deben manejar millones de interacciones, de usuarios, por segundo.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/18.png', alt='Imagen de alto rendimiento')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Distribución geográfica
              p Muchas bases de datos NoSQL están diseñadas para funcionar en sistemas distribuidos globalmente, asegurando acceso rápido y seguro a los datos, desde múltiples ubicaciones. 
              p.mb-0 Por ejemplo, las bases de datos de servicios de streaming, donde los datos deben estar disponibles para usuarios, en diferentes regiones, en tiempo real.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/19.png', alt='Imagen de distribución geográfica')

    .p-4.bg-color-1.mb-5(data-aos='fade-up')
      p.mb-0 Estas características las posicionan como una solución ideal para los desafíos de la era del #[i Big Data] y las aplicaciones en tiempo real.

    h2.mb-3(data-aos='fade-up') Ejemplos destacados de bases de datos NoSQL
    p.mb-5(data-aos='fade-up') Han surgido múltiples implementaciones destacadas que abordan necesidades específicas, como el manejo de datos estructurados, semiestructurados y no estructurados, la alta disponibilidad y el procesamiento en tiempo real. Veamos algunos ejemplos representativos de bases de datos NoSQL, explorando sus características principales y casos de uso.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-6
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t2/20.svg')
          .tarjeta.color-adicional-1.p-4(x="25%" y="16%" numero="+")
            p.mb-0 #[b Tipo:] base de datos orientada a documentos. 
            p.mb-0 #[b Características claves:] utiliza JSON (o BSON) para almacenar datos. Ideal para estructuras flexibles y dinámicas. 
            p.mb-0 #[b Caso de uso:] un sitio de comercio electrónico que almacena información de productos con atributos variados (color, tamaño, precio) y permite modificaciones frecuentes. 
            p.mb-0 #[b Ventajas destacadas:] consulta eficiente mediante índices e integración, con herramientas de análisis como Tableau o Power BI.
         
          .tarjeta.color-adicional-1.p-4(x="70%" y="23%" numero="+")
            p.mb-0 #[b Tipo:] base de datos orientada a columnas.
            p.mb-0 #[b Características claves:] diseñada para manejar grandes volúmenes de datos, distribuidos en múltiples nodos con alta disponibilidad.
            p.mb-0 #[b Caso de uso:] empresas de telecomunicaciones que gestionan registros de llamadas (CDR) y analizan patrones de uso para optimizar redes.
            p.mb-0 #[b Ventajas destacadas:] escalabilidad sin interrupciones y rendimiento óptimo, con millones de transacciones por segundo.

          .tarjeta.color-adicional-1.p-4(x="76%" y="66%" numero="+")
            p.mb-0 #[b Tipo:] base de datos orientada a grafos.
            p.mb-0 #[b Características claves:] almacena datos en forma de nodos y relaciones, facilitando la representación de redes complejas.
            p.mb-0 #[b Caso de uso:] análisis de redes sociales para detectar comunidades, influenciadores y patrones de conexión.
            p.mb-0 #[b Ventajas destacadas:] consultas rápidas en datos interrelacionados.

          .tarjeta.color-adicional-1.p-4(x="30%" y="62%" numero="+")
            p.mb-0 #[b Tipo:] almacén de datos en memoria, basado en clave-valor.
            p.mb-0 #[b Características claves:] velocidad ultrarrápida gracias al almacenamiento en memoria RAM y soporte de estructuras avanzadas como listas y conjuntos.
            p.mb-0 #[b Caso de uso:] sistemas de mensajería instantánea donde se requiere acceso casi inmediato a datos.
            p.mb-0 #[b Ventajas destacadas:] baja latencia, ideal para videojuegos en línea y análisis en tiempo real.

    .p-4.bg-color-2.mb-5(data-aos='fade-up')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/21.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Los anteriores, son ejemplos destacados de bases de datos NoSQL demuestran su versatilidad y capacidad para adaptarse a las demandas tecnológicas actuales. Soluciones como MongoDB, Cassandra, Redis y Neo4j, ilustran cómo estas herramientas permiten gestionar datos de manera eficiente en aplicaciones como comercio electrónico, redes sociales, análisis en tiempo real y sistemas de recomendación. Su adopción continúa creciendo gracias a su capacidad para ofrecer rendimiento, escalabilidad y flexibilidad en escenarios cada vez más complejos y dinámicos.

    h2.mb-4(data-aos='fade-up') Comparativa con bases de datos relacionales
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
          p.mb-0 La comparación entre bases de datos NoSQL y bases de datos relacionales, surge de la necesidad de entender cómo estas tecnologías responden a los crecientes desafíos del manejo de datos en la era digital. Mientras que las bases de datos relacionales, con su estructura rígida y lenguaje SQL, han sido el estándar durante décadas, las bases de datos NoSQL ofrecen un enfoque más flexible y escalable, para aplicaciones modernas. Analizar sus diferencias en aspectos como estructura, rendimiento, escalabilidad y casos de uso específicos, permite evaluar cuál es la solución más adecuada según los requerimientos del proyecto.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/22.png', alt='')


    .row.justify-content-start.mb-4(data-aos='fade-up')
      .col-sm-12.col-lg-9
        .titulo-figura.mb-2.d-d-flex
          p.mb-0 #[b Tabla 4.] Comparativa con bases de datos relacionales 
        .tabla-a.color-primario.mb-0
          table
            thead
              tr
                th.w-25 Aspecto
                th Relacionales
                th NoSQL
            tbody
              tr
                td.fw-bold Estructura de datos
                td Esquema fijo (tablas).
                td Esquema flexible (documentos, etc.).
              tr
                td.fw-bold Escalabilidad
                td Vertical (un servidor más grande).
                td Horizontal (múltiples nodos).
              tr
                td.fw-bold Flexibilidad
                td Limitada.
                td Alta
              tr
                td.fw-bold Casos de uso
                td Transacciones bancarias.
                td #[i Big Data], IoT, análisis en tiempo real.

    p.mb-4(data-aos='fade-up') Aunque las bases de datos relacionales siguen siendo la opción preferida para sistemas que requieren consistencia estricta y estructuras bien definidas, las bases de datos NoSQL destacan en escenarios donde la flexibilidad, la escalabilidad horizontal y el manejo eficiente de datos heterogéneos son esenciales.
    .p-4.bg-color-7.mb-5(data-aos='fade-up')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/23.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 La elección entre ambas tecnologías, depende del contexto y las necesidades especificas, demostrando que no son soluciones excluyentes, sino complementarias en un ecosistema cada vez más diversificado y orientado a la innovación tecnológica. 























</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
