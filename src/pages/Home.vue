<template>
<div>
  <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" style="background-image: url('img/home/greeting2.jpg');">
      </div>
      <div class="section" style="background-image: url('img/home/greeting3.jpg');">
        Second section ...
      </div>
      <div class="section" style="background-image: url('img/home/greeting4.jpg');">

      </div>
      <div class="section" style="background-image: url('img/home/greeting5.jpg');">
        Forth section ...
      </div>
    </full-page>
  </div>
</div>
</template>

<script>

import { Parallax } from '@/components';
export default {
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENS",
        menu: '#menu',
        sectionsColor: ['rgba(0,0,0,0)', '#ff5f45', '#41b883', '#eefedf'],
        controlArrows: true,
        fitToSection: true
      }
    }
  },
  components: {
    Parallax
  }
}
</script>
<style scoped lang="scss">
.section {
  background-position: center center;
  background-size: cover;
}
</style>
