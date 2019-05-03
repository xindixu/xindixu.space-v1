<template>
  <div>
    <b-navbar class="my-2 nav fixed" toggleable="md" type="light" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
       <b-navbar-nav>
         <router-link to="/" tag="b-nav-item" active-class="active" exact><a>Home</a></router-link>
         <router-link to="/members" tag="b-nav-item" active-class="active"><a>Members</a></router-link>
         <router-link to="/research" tag="b-nav-item" active-class="active"><a>Research</a></router-link>
         <router-link to="/facilities" tag="b-nav-item" active-class="active"><a>Facilities</a></router-link>
         <router-link to="/publications" tag="b-nav-item" active-class="active"><a>Publications</a></router-link>
         <router-link to="/teaching" tag="b-nav-item" active-class="active"><a>Teaching</a></router-link>
         <router-link to="/contact" tag="b-nav-item" active-class="active"><a>Contact</a></router-link>
       </b-navbar-nav>
     </b-collapse>
   </b-navbar>
  </div>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 5px;
  }
  .navbar, .collapse > li{
    height: 50px;
    z-index:10000;
    position: static;
  }
  .active a{
    font-weight: bold;
  }
</style>
