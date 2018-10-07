<template>
<div>
  <div>
      <full-page ref="fullpage" :options="fullpageOptions" id="fullpage">
      <div class="section" style="background-image: url('img/bg/bg14.jpg');">

      </div>
      <div class="section" style="padding:0px; margin: 0px;">
        <slider style="width:100vw;height:100vh;margin: 0px;" ref="slider" :options="horizontalOptions">
            <slideritem v-for="(item,index) in horizontalList" :key="index" :style="item.style">{{item.html}}</slideritem>
        </slider>
      </div>
      <div class="section" style="background-image: url('img/bg/bg21.jpg');">
      </div>
      <div class="section" style="background-image: url('img/bg/bg22.jpg');">
      </div>
      <div class="section" style="background-image: url('img/bg/bg27.jpg');">
      </div>
    </full-page>
  </div>
</div>
</template>

<script>
import { slider, slideritem } from '@/components';
export default {
  data() {
    return {
      verticallyScrolled: false,
      fullpageOptions: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENS",
        navigation: true,
        controlArrows: true,
        scrollHorizontally: true,
        fitToSection: true
      },
      horizontalList:
      [{
          html: 'slide1',
          style: {
            'background': '#1bbc9b'
          }
        },
        {
          html: 'slide2',
          style: {
            'background': '#4bbfc3'
          }
        },
        {
          html: 'slide3',
          style: {
            'background': '#7baabe'
          }
        }],
        //Sliding configuration [obj]
      horizontalOptions: {
        grabCurser:true,
        pagination:true,
        thresholdDistance:100,
        loop:true,
        autoplay:4000,
        slidesToScroll:1
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
<style scoped lang="scss">
.section {
  background-position: center center;
  background-size: cover;
}
#fp-nav ul>li>a {
  cursor: default;
}
</style>
