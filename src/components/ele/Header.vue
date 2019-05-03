<template>
  <div class="justify-center">
    <div class="title">
      <router-link to="/"><a>Nanoelectronic Materials Research Group</a></router-link>
    </div>
    <div class="sub-title">
      <a target="_blank" href="https://www.utexas.edu">The University Of Texas At Austin</a>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
@import '../../styles/_custom.scss';

  .title {
    font: 4vw $secondary-font;
    a{
      color: $primary;
      text-decoration: none;
    }
  }
  .sub-title {
    font: 3vw $secondary-font;
    a{
      color: $secondary;
      text-decoration: none;
    }
  }

</style>
