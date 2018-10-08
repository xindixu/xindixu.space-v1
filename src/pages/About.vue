<template>
  <div>
    <!-- Slider main container -->
    <div class="swiper-container">
    <swiper id="v" :options="swiperOptionV">
      <swiper-slide style="background-image: url('img/bg/bg1.jpg');"><h1>Vertical Slide 1</h1></swiper-slide>
      <swiper-slide style="padding:0px; margin: 0px;">
        <swiper id="h" :options="swiperOptionH">
          <swiper-slide style="background-image: url('img/bg/bg12.jpg');"><h1>Horizontal Slide 1</h1></swiper-slide>
          <swiper-slide style="background-image: url('img/bg/bg3.jpg');"><h1>Horizontal Slide 2</h1></swiper-slide>
          <swiper-slide style="background-image: url('img/bg/bg4.jpg');"><h1>Horizontal Slide 3</h1></swiper-slide>
          <swiper-slide style="background-image: url('img/bg/bg5.jpg');"><h1>Horizontal Slide 4</h1></swiper-slide>
          <swiper-slide style="background-image: url('img/bg/bg6.jpg');"><h1>Horizontal Slide 5</h1></swiper-slide>
          <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <swiper-slide style="background-image: url('img/bg/bg4.jpg');"><h1>Vertical Slide 3</h1></swiper-slide>
      <swiper-slide style="background-image: url('img/bg/bg14.jpg');"><h1>Vertical Slide 4</h1></swiper-slide>
      <swiper-slide style="background-image: url('img/bg/bg15.jpg');"><h1>Vertical Slide 5</h1></swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </swiper>
      <!-- swiper -->

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionH: {
          pagination: {
            el: '.swiper-pagination-h',
            clickable: true
          },
          mousewheel: {
            forceToAxis: true,
            invert: true
          },
          keyboard: {
            enabled: true,
            onlyInViewport: false
          }
        },
        swiperOptionV: {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination-v',
            clickable: true
          },
          mousewheel: {
            forceToAxis: true,
            invert: true
          },
          keyboard: {
            enabled: true,
            onlyInViewport: false
          }
        }
      }
    }
  }
</script>

<style>
.swiper-container{
  height: 100vh;
  width: 100vw;
}
.swiper-slide{
  background-position: center center;
  background-size: cover;
  padding-top: 60px;
}
.swiper-pagination{
  index: 10;
}

.swiper-pagination-v .swiper-pagination-bullet-active{
  -webkit-transform: translateX(-25%);
  -ms-transform: translateX(-25%);
  transform: translateX(-25%);
}
.swiper-pagination-h .swiper-pagination-bullet-active{
  -webkit-transform: translateY(25%);
  -ms-transform: translateY(25%);
  transform: translateY(25%);
}
</style>
