<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      p.mb-5(data-aos="fade-up") El crecimiento exponencial de los datos en la era digital, ha dado lugar a la necesidad de herramientas y enfoques que permiten procesar, analizar y extraer valor de grandes volúmenes de información. #[i Big Data] surge como una solución clave, al abordar el manejo de datos complejos, provenientes de diversas fuentes y formatos.
      .row.justify-content-center.mb-5(data-aos="fade-up")
        .col-sm-12.col-lg-8
          .bg-color-1.px-5.py-4
            p.mb-0 Sus características fundamentales, conocidas como las 5V: volumen, velocidad, variedad, veracidad y valor, son la base para comprender cómo los datos pueden transformar organizaciones y procesos en múltiples sectores. La combinación de estas propiedades, permite convertir información cruda en conocimiento estratégico.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/intro/1.png", alt="")
      .p-4.bg-color-5.mb-5
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/intro/2.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 La adopción de tecnologías como Hadoop y Spark, junto con bases de datos NoSQL, facilita el análisis eficiente de datos, permitiendo a las organizaciones optimizar decisiones y adaptarse a un entorno cada vez más dinámico y competitivo.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
