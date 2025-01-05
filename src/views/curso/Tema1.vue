<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos de <i>Big Data</i>'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0 #[i Big Data] engloba el manejo de grandes volúmenes de datos que exceden la capacidad de procesamiento de las herramientas tradicionales. Sus cinco características esenciales, conocidas como las "5V", son fundamentales para comprender y gestionar el fenómeno. A continuación, se explican en detalle, con ejemplos prácticos y análisis crítico.
    h2.mb-3(data-aos="fade-up") Volumen
    p.mb-4(data-aos="fade-up") Hace referencia a la enorme cantidad de datos generados y almacenados diariamente debido al crecimiento de las plataformas digitales, redes sociales y dispositivos IoT.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-6.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/2.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Ejemplo aplicado
            p.mb-0.text-center Cada minuto, se suben más de 500 horas de video a plataformas como YouTube, lo que requiere sistemas robustos de almacenamiento y organización.

      .col-sm-12.col-lg-6.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/3.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Análisis críticos
            p.mb-0.text-center Las empresas enfrentan desafíos significativos para almacenas estos volúmenes de datos, de manera eficiente y rentable. Soluciones como el almacenamiento en la nube y los sistemas distribuidos, se han convertido en estándares para abordar este reto.

    h2.mb-3(data-aos="fade-up") Velocidad
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.mb-4 Indica la rapidez con la que los datos son generados, recolectados y procesados, siendo crucial para aplicaciones que demandan análisis en tiempo real.
        .p-4.bg-color-2.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/4.svg', style='max-width: 90px').mx-auto
            .col-lg
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-circle.icon-list
                  span #[b Ejemplo aplicado.] En el comercio electrónico, Amazon procesa millones de transacciones por segundo, ajustando recomendaciones y precios casi instantáneamente.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  span #[b Reflexión.] Tecnologías como Apache Kafka o Spark, han permitido procesar flujo de datos en tiempo real, aunque siguen existiendo retos relacionados con la latencia y la sincronización.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/5.png', alt='')
    h2.mb-3(data-aos="fade-up") Variedad
    p.mb-5(data-aos="fade-up") Se refiere a los diferentes tipos de datos disponibles: estructurados (tablas), no estructurados (videos, imágenes) y semiestructurados (archivos JSON o XML).
    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .py-4.py-md-5.bg-color-7.p-4(titulo="Estructurados")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/6.png')
          .col-sm-12.col-lg-8
            h4 Estructurados
            p.mb-0 Datos de ventas organizados en tablas de bases de datos.

      .py-4.py-md-5.bg-color-7.p-4(titulo="No estructurados")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/7.png')
          .col-sm-12.col-lg-8
            h4 No estructurados
            p.mb-0 Publicaciones en redes sociales, videos o documentos de texto.
      .py-4.py-md-5.bg-color-7.p-4(titulo="Semiestructurados")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/8.png')
          .col-sm-12.col-lg-8
            h4 Semiestructurados
            p.mb-0 Registros de clientes en formularios web almacenados en JSON.

    .p-4.bg-color-5.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg
          p.mb-0 #[b Desafío:] integrar estas fuentes heterogéneas requiere herramientas como NoSQL o procesos ETL, para unificar formatos y habilitar análisis coherentes.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/9.svg', style='max-width: 90px').mx-auto


    h2.mb-3(data-aos="fade-up") Veracidad
    p.mb-5(data-aos="fade-up") Se enfoca en garantizar la calidad, precisión y confiabilidad de los datos, dado que la información incorrecta puede llevar a decisiones equivocadas.
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/10.png', alt='')
        .col-lg
          .p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.icon-list
                span #[b Ejemplo aplicado.] En el sector salud, datos imprecisos en los historiales clínicos, pueden comprometer diagnósticos y tratamientos.
              li.d-flex
                i.fas.fa-circle.icon-list
                span #[b Técnicas claves.] Algoritmos de validación y herramientas de limpieza de datos, se emplean para identificar errores y mejorar la confiabilidad de los análisis.

    .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
      .px-4.px-md-5.pb-md-3
        h2.mb-3 Valor
        p.mb-5 Refleja la capacidad de extraer información útil y relevante, de los datos recopilados, para tomar decisiones estratégicas.
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/11.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Ejemplo aplicado
                p.mb-0.text-center En marketing, el análisis de patrones de comportamiento, permite crear campañas personalizadas que incrementan la retención del cliente.

          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/12.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Enfoque estratégico
                p.mb-0.text-center Las herramientas de análisis avanzado, como Tableau o Power Bi, Son esenciales para transformar los datos, en acciones de alto impacto. 
    p.mb-5(data-aos="fade-up") El éxito de una estrategia de #[i Big Data] depende del equilibrio entre estas cinco características. Ignorar cualquiera de ellas puede comprometer la utilidad y confiabilidad de los datos. Por ejemplo, un sistema que maneja datos a alta velocidad, pero con baja veracidad, puede generar conclusiones inexactas. Del mismo modo, sin una clara orientación hacia el valor, los esfuerzos en #[i Big Data] pierden relevancia estratégica.
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/es/lc/tecnologicadeloriente/titulos/122682' target='_blank' rel='noopener noreferrer') Holmes, D. E. (2018). Big Data: una breve introducción. Antoni Bosch Editor.
          
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://blog.hubspot.es/website/que-es-big-data' target='_blank' rel='noopener noreferrer') HubSpot. (2024). ¿Qué es Big Data? HubSpot.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.tableau.com/es-es/products/trial' target='_blank' rel='noopener noreferrer') Tableau. (2024). Comience su prueba gratuita de Tableau.
 
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=T31CpSQD-hc' target='_blank' rel='noopener noreferrer') LT DATA CHANNEL. (2024). ¿QUÉ ES EL BIG DATA Y PARA QUÉ SIRVE?

          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
