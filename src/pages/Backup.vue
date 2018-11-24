<template>
<div>
  <div>
      <full-page ref="fullpage" :options="fullpageOptions" id="fullpage">
      <div class="section" style="background-image: url('img/bg/bg14.jpg');">
      </div>
      <div class="section" style="padding:0px; margin: 0px;">
        <div class="slide" style="background-image: url('img/bg/bg12.jpg');">
          slide1
        </div>
        <div class="slide" style="background-image: url('img/bg/bg13.jpg');">
          slide2
        </div>
        <div class="slide" style="background-image: url('img/bg/bg11.jpg');">
          slide3
        </div>
        <div class="slide" style="background-image: url('img/bg/bg1.jpg');">
          slide4
        </div>
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
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENS',
        navigation: true,
        slidesNavigation: true,
        controlArrows: true,
        scrollHorizontally: true
      }
    };
  }
};
</script>
<style scoped lang="scss">
.section,
.slide {
  background-position: center center;
  background-size: cover;
}
</style>
