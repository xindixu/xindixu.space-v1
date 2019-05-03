<template>
  <div>
    <h1>Research</h1>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <div v-for="research in researchs">
        <div v-for="data, key in research">
            <b-carousel-slide :img-src="'../src/assets/research/'+data.bg">
              <h4>{{ key }}</h4>
            </b-carousel-slide>
        </div>
      </div>
    </b-carousel>

    <p>Listed above are examples of a few (but not all) of the active thrust areas being conducted in the Shih group.  The group also engages in many interdisciplinary collaborative research activities. Collaborators include theorists and experimentalists, both domestic and international.</p>
  </div>
</template>

<script>
import researchList from '../../assets/research/data.json';

export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      researchs: researchList
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->

<style lang="scss" scoped>
h4{
  color: white;
}
</style>
