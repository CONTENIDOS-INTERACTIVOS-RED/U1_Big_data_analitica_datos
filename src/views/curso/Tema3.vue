<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Desafíos en el manejo de grandes volúmenes de datos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/1.png', alt='')
      .col-sm-12.col-lg-8
        .bg-color-2.p-4
          p.mb-0 Trabajar con #[i Big Data] implica enfrentar retos técnicos y estratégicos que van desde el almacenamiento eficiente, hasta el análisis de información en tiempo real. Este tema se centra en comprender estos desafíos y en explorar las soluciones tecnológicas disponibles para superarlos.

    h2.mb-3(data-aos="fade-up") Escalabilidad y costos en el manejo de #[i Big Data]
    p.mb-5(data-aos="fade-up") La capacidad de escalar de forma eficiente y el control de costos, son factores esenciales en el manejo de grandes volúmenes de datos. A medida que la generación de datos aumenta, las organizaciones deben adoptar estrategias sostenibles que combinen escalabilidad técnica y optimización de recursos financieros.
    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .py-4.py-md-5.bg-color-7.p-4(titulo="Escalabilidad horizontal")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t3/2.png', alt='Imagen escalabilidad horizontal')
          .col-sm-12.col-lg-8
            h4 Escalabilidad horizontal
            p.mb-0 Añadir más servidores o nodos, para distribuir la carga de almacenamiento y procesamiento.

      .py-4.py-md-5.bg-color-7.p-4(titulo="Optimización de costos")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t3/3.png', alt='Imagen optimización de costos')
          .col-sm-12.col-lg-8
            h4 Optimización de costos
            p.mb-0 Utilizar plataformas de almacenamiento en la nube, como AWS, Azure o Google Cloud, que ofrecen modelos flexibles de pago por uso.

      .py-4.py-md-5.bg-color-7.p-4(titulo="Estrategias de eficiencia")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t3/4.png', alt='Imagen estrategias de eficiencia')
          .col-sm-12.col-lg-8
            h4 Estrategias de eficiencia
            p.mb-0 Aplicar técnicas de compresión de datos y procesamiento en tiempo real, para reducir el consumo de recursos.

    h2.mb-3(data-aos="fade-up") Ejemplo aplicado
    p.mb-5(data-aos="fade-up") Una empresa de comercio electrónico enfrenta el desafío de almacenar y analizar millones de registros de ventas diarias:
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-circle.icon-list
                span #[b Escalabilidad:] implementa hadoop, para distribuir los datos entre varios nodos. 
              li.d-flex
                i.fas.fa-circle.icon-list
                span #[b Optimización:] utiliza servicios en la nube con políticas de pago por demanda, para evitar sobrecostos. 
              li.d-flex
                i.fas.fa-circle.icon-list
                span #[b Procesamiento:] integra Apache Spark para realizar análisis en tiempo real, sobre patrones de compra y comportamiento del cliente. 
              li.d-flex
                i.fas.fa-circle.icon-list
                span #[b Resultado:] la organización mejora la eficiencia de sus operaciones, reduce costos innecesarios y optimiza la toma de decisiones basada en datos precisos. 
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/5.png', alt='')

    p.mb-4(data-aos="fade-up") En conclusión, el manejo de grandes volúmenes de datos, requiere abordar los desafíos técnicos relacionados con la infraestructura, la velocidad, la escalabilidad y la integración de datos diversos. La adopción de tecnologías avanzadas y estrategias eficientes, garantiza un procesamiento óptimo y sostenible en el tiempo.
    h2.mb-3(data-aos="fade-up") Comparativa de costos de almacenamiento en plataformas en la nube
    p.mb-5(data-aos="fade-up") Las plataformas en la nube como Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP), son las opciones más utilizadas para almacenar y procesar grandes volúmenes de datos. Sin embargo, estas plataformas difieren en términos de precios, características y modelos de uso.
    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 5.] Comparativa de costos de almacenamiento en plataformas en la nube
    .tabla-a.color-primario.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th.w-15 Aspecto
            th AWS
            th Azure
            th Google Cloud
        tbody
          tr
            td.fw-bold Modelo de precios
            td.tr-br Pago por uso; descuentos por uso reservado y a largo plazo.
            td Pago por uso; descuentos por uso reservado y a largo plazo.
            td Pago por uso con descuentos para uso sostenido.
          tr
            td.fw-bold Costo por almacenamiento estándar
            td.tr-br $0.023/GB por mes para S3 Standard.
            td $0.0184/GB por mes para Blob Storage.
            td $0.020/GB por mes para Standard Storage.
          tr
            td.fw-bold Almacenamiento frío (Cold Storage)
            td.tr-br $0.004/GB por mes (Glacier).
            td $0.001/GB por mes (Archive).
            td $0.004/GB por mes (Coldline).
          tr
            td.fw-bold Ubicación de los centros de datos
            td.tr-br Más de 25 regiones globales.
            td Más de 60 regiones globales.
            td Más de 35 regiones globales.
          tr
            td.fw-bold Integración de servicios
            td.tr-br Integración robusta con servicios como Redshift, Athena y EMR.
            td Amplia compatibilidad con aplicaciones empresariales de Microsoft.
            td Herramientas avanzadas de análisis como BigQuery y Vertex AI.


    .p-4.bg-color-1.mb-5(data-aos="fade-up")
      p.mb-0 En conclusión, se tiene que la AWS es ideal para proyectos que requieren una amplia gama de servicios y herramientas personalizadas, aunque puede ser más costoso en aplicaciones intensivas. Pero  Azure ofrece una ventaja competitiva para empresas que ya utilizan herramientas de Microsoft, como Office 365 o Dynamics. Por su lado, GCP destaca por su simplicidad y su enfoque en análisis y aprendizaje automático, siendo una opción rentable para proyectos orientados al análisis de datos.
    h2.mb-3(data-aos="fade-up") Estrategias para optimizar costos, mediante tecnologías eficientes
    p.mb-5(data-aos="fade-up") A pesar de las ventajas de las plataformas en la nube, los costos pueden aumentar rápidamente, si no se implementan estrategias adecuadas. A continuación, se presentan enfoques claves para optimizar los costos, asociados al manejo de datos masivos:
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Uso de almacenamiento jerarquizado (Tiered Storage)
              p Dividir los datos en diferentes niveles de almacenamiento, según su frecuencia de uso:
              ul.lista-ul--color.mb-0.mx-4
                li.d-flex
                  span Hot Storage: datos de acceso frecuente (más costoso).
                li.d-flex
                  span Cold Storage: datos de acceso ocasional.
                li.d-flex
                  span Archive Storage: datos históricos o raramente utilizados.
              p.mt-3 #[b Ejemplo práctico:] una empresa de análisis financiero, puede almacenar datos recientes en almacenamiento caliente para análisis en tiempo real y mover registros históricos al almacenamiento archivado.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/6.png', alt='Imagen almacenamiento jerarquizado')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Compresión de datos
              p Reducir el tamaño de los datos almacenados, mediante técnicas de compresión como gzip, zstd o snappy.
              p #[b Impacto:] menor consumo de almacenamiento y reducción de costos asociados.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/7.png', alt='Imagen compresión de datos')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Eliminación de datos redundantes
              p Implementar procesos de limpieza para identificar y eliminar datos duplicados o innecesarios.
              p #[b Beneficio:] optimización del espacio de almacenamiento sin afectar la integridad de los datos.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/8.png', alt='Imagen eliminación de datos redundantes')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Automatización de escalabilidad
              p Configurar sistemas en la nube, para escalar automáticamente, según la demanda.
              p #[b Ejemplo:] servicios como AWS Auto Scaling o Azure Scale Sets, ajustan los recursos, según el tráfico o la carga de trabajo, evitando costos innecesarios en periodos de baja actividad.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/9.png', alt='Imagen automatización de escalabilidad')


          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Adopción de tecnologías de código abierto
              p Utilizar herramientas de código abierto como Hadoop y Spark en lugar de soluciones comerciales más costosas. Estas tecnologías ofrecen escalabilidad y flexibilidad, sin costos elevados de licencias.
              p #[b Consideración:] aunque iniciales bajos, requieren experiencia técnica para configuraciones complejas.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/10.png', alt='Imagen adopción tecnologías código abierto')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Optimización del procesamiento
              p Diseñar flujos de trabajo para minimizar la repetición de tareas intensivas en recursos.
              p #[b Ejemplo:] en lugar de procesar datos completos repetidamente, usar muestras o datos previamente preprocesados para tareas exploratorias.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/11.png', alt='Imagen optimización del procesamiento')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Monitoreo y auditoría continua
              p Implementar herramientas de monitoreo como AWS Cost Explorer, Azure Cost Management o Google Cloud Cost Management, para identificar patrones de uso y oportunidades de ahorro.
              p #[b Práctica recomendada:] configurar alertas para evitar sobrecostos inesperados.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/12.png', alt='Imagen monitoreo y auditoría continua')

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/13.png', alt='')
        .col-lg
          .p-4
            p.mb-0 La escalabilidad y los costos son dos caras de la misma moneda en #[i Big Data]. Aprovechar plataformas en la nube como AWS, Azure y Google Cloud, es esencial para manejar grandes volúmenes de datos, pero hacerlo de manera eficiente requiere estrategias claras para optimizar los costos. Desde el uso de almacenamiento jerarquizado, hasta la adopción de tecnologías de código abierto y monitoreo constante, las organizaciones pueden maximizar el retorno de inversión en sus proyectos de #[i Big Data] mientras garantizan la sostenibilidad a largo plazo.

    .bg-full-width.bg-color-5.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Ejemplos de soluciones aplicadas en #[i Big Data]
             p.mb-4 Se invita a conocer #[b ejemplos de soluciones aplicadas] en #[i Big Data], donde herramientas como Hadoop y Spark han optimizado procesos y mejorado los servicios en sectores como #[b retail, banca, telecomunicaciones, salud y educación]. Los casos destacan logros como detección de fraudes en tiempo real, diagnósticos médicos más rápidos y estrategias educativas personalizadas, demostrando el impacto transformador del análisis de datos masivos.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto 
                  p <strong>Anexo. </strong> Ejemplos de soluciones aplicadas en  Big Data
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/14.png', alt='')





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
