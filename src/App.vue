<template>
  <div>
    <b-container>
        <app-header></app-header>
        <app-nav-bar></app-nav-bar>
        <router-view></router-view>
        <app-footer></app-footer>
      </b-container>
  </div>
</template>

<script>

import Header from './components/ele/Header.vue';
import NavBar from './components/ele/Navbar.vue';
import Footer from './components/ele/Footer.vue';

export default {
  components:{
    appHeader: Header,
    appNavBar: NavBar,
    appFooter: Footer
  }
}
</script>

<style lang="scss">

@import "styles/_custom.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1{
  text-align: center;
}

</style>
