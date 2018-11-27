<template>
<div>
  <div class="swiper-container">
    <swiper id="v" :options="swiperOptionV">
      <swiper-slide>
        <div id="header">
          <h1 class="display-3">{{ greeting }}</h1>
          <h1 class="display-3">
            I'm Xindi,
            <vue-typer :text="role" :repeat="Infinity" :shuffle="false" initial-action="typing" :pre-type-delay="100" :type-delay="100" :pre-erase-delay="6000" :erase-delay="250" erase-style="clear" :erase-on-complete="false" caret-animation="blink"
              class="display-3"></vue-typer>
          </h1>
          <p class="display-4" id="header4">{{ headline }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <p>Vertical Slide 2</p>
      </swiper-slide>
      <swiper-slide>
        <p>Vertical Slide 3</p>
      </swiper-slide>
      <swiper-slide>
        <p>Vertical Slide 4</p>
      </swiper-slide>
      <swiper-slide>
        <p>Vertical Slide 5</p>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </swiper>
    <!-- update https://jsfiddle.net/awolf2904/m9hxfmcz/ -->
  </div>
</div>
</template>

<script>
import {
  VueTyper
} from 'vue-typer';
export default {
  data() {
    return {
      // for setInterval & clearInterval
      running: String,
      index: 0,
      role: ['a Devsigner,', 'a Learner,', 'a Cat Mom,'],
      detail: [
        'designing the user experience of websites & apps.',
        'building websites with latest front-end technologies.',
        'studying Advertising & Computer Science at UT Austin.',
        'learning web development online.',
        'having fun with my kitty.',
        'being frustrated because he is getting lazy & fat.'
      ],
      swiperOptionV: {
        direction: 'vertical',
        speed: 500,
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
    };
  },
  methods: {},
  computed: {
    greeting() {
      let time = new Date().getHours();
      let greeting = 'Hey There!';
      switch (true) {
        case time < 5:
          greeting = 'Good Night!';
          break;
        case time < 12:
          greeting = 'Good Morning!';
          break;
        case time < 17:
          greeting = 'Good Afternoon!';
          break;
        case time < 20:
          greeting = 'Good Evening!';
          break;
        case time < 24:
          greeting = 'Good Night!';
          break;
      }
      return greeting;
    },
    headline() {
      return this.detail[this.index];
    }
  },
  created() {
    this.running = setInterval(() => {
      this.index < this.detail.length - 1 ? this.index++ : (this.index = 0);
    }, 3500);
  },
  beforeRouteLeave(to, from, next) {
    this.index = 0;
    clearInterval(this.running);
    next();
  },
  components: {
    VueTyper
  }
};
</script>

<style lang="scss">
.swiper-container {
    height: 100vh;
    width: 100vw;
}
.swiper-slide {
    background-position: center center;
    background-size: cover;
    padding: 70px 1%;
}
.swiper-pagination {
    index: 10;
}
.swiper-pagination-v .swiper-pagination-bullet-active {
    -webkit-transform: translateX(-25%);
    -ms-transform: translateX(-25%);
    transform: translateX(-25%);
}
.swiper-pagination-h .swiper-pagination-bullet-active {
    -webkit-transform: translateY(25%);
    -ms-transform: translateY(25%);
    transform: translateY(25%);
}

.self {
    width: 300px;
    height: 300px;
}

#header {
    position: absolute;
    top: 15%;
    left: 20%;
}
</style>
