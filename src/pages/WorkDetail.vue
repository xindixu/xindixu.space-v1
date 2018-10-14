<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image"
                style="background-image: url('img/bg/bg10.jpg')">
      </parallax>
      <div class="content-center">
          <div class="container">
              <h1 class="title">{{ work[0].title }}</h1>
          </div>
      </div>
    </div>


  </div>
</template>
<script>
import { Parallax, Card } from '@/components';
import workList from '../assets/work/data.json';
export default {
  name: "workDetail",
  data: () => ({
    works: workList
  }),
  props:['id'],
  watch:{
    '$route'(to,from){
      this.id = to.params.id;
    }
  },
  computed:{
    work(){
      return workList.filter(work => work.id === this.id);
    }
  },
  components: {
    Parallax,
    Card
  }
}
</script>
<style lang="scss" scoped>
</style>
