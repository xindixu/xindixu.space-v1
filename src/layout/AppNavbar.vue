<template>
  <div>
    <!-- Navbar Primary  -->
    <navbar menu-classes="ml-auto"
            position="fixed"
            type="primary"
            :transparent="transparent"
            :colorOnScroll="colorOnScroll">
        <template slot="default">
          <router-link tag="a" class="nav-brand" to="/">XindiXu.space</router-link>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <router-link tag="a" class="nav-link" active-class="active" exact to="/home">
                    <i class="now-ui-icons objects_globe"></i>
                    <p>Home</p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link tag="a" class="nav-link" active-class="active" to="/about">
                    <i class="now-ui-icons users_circle-08"></i>
                    <p>About</p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link tag="a" class="nav-link" active-class="active" to="/work">
                    <i class="now-ui-icons design-2_ruler-pencil"></i>
                    <p>Work</p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link tag="a" class="nav-link" active-class="active" to="/blog">
                    <i class="now-ui-icons education_agenda-bookmark"></i>
                    <p>Blog</p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link tag="a" class="nav-link" active-class="active" to="/casper">
                  <svg style="top:-10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"  width="21" height="16" fill="#fff"><path d="M64.125,62.735001 c-1.657,0 -3,1.343 -3,3 c0,2.361 -1.922,4.283 -4.285,4.283 c-1.952,0 -3.585,-1.321 -4.099,-3.111 c1.104,-0.443 1.884,-1.519 1.884,-2.78 c0,-1.657 -1.343,-3 -3,-3 h-4.168 c-1.657,0 -3,1.343 -3,3 c0,1.262 0.78,2.336 1.883,2.78 c-0.514,1.79 -2.147,3.111 -4.1,3.111 c-2.362,0 -4.283,-1.922 -4.283,-4.283 c0,-1.657 -1.343,-3 -3,-3 s-3,1.343 -3,3 c0,4.705 3.18,8.673 7.501,9.891 v0.291 c0,5.56 4.523,10.083 10.083,10.083 c5.559,0 10.083,-4.523 10.083,-10.083 v-0.292 c4.321,-1.218 7.502,-5.186 7.502,-9.89 C67.125,64.078003 65.782997,62.735001 64.125,62.735001  z M49.541,80 c-2.251,0 -4.083,-1.832 -4.083,-4.083 v-0.422 c1.558,-0.515 2.953,-1.388 4.083,-2.527 c1.13,1.14 2.525,2.013 4.083,2.528 v0.421 C53.624001,78.167999 51.792,80 49.541,80  z " id="path1"></path><circle r="5.75" cx="26.104px" id="circle1" cy="48.126999px"></circle><circle cx="72.978996px" r="5.75" id="circle1" cy="48.126999px"></circle><path d="M100.367996,59.391998 l-2,-54.667 c-0.039,-1.061 -0.636,-2.022 -1.569,-2.528 c-0.934,-0.506 -2.065,-0.48 -2.975,0.066 L69.367996,16.966 H29.148998 L5.285,2.278999 c-0.909,-0.56 -2.047,-0.595 -2.987,-0.09 c-0.941,0.503 -1.544,1.469 -1.583,2.535 l-2,54.667 c-0.001,0.036 -0.002,0.073 -0.002,0.109 c0,23.585 19.001,37.665 50.828,37.665 c31.828,0 50.829,-14.08 50.829,-37.665 C100.370003,59.464996 100.369003,59.428001 100.367996,59.391998  z M49.541,91.166 c-13.47,0 -44.79,-3.08 -44.828,-31.611 l1.81,-49.469 l20.205,12.435 c0.473,0.291 1.017,0.445 1.572,0.445 h41.9 c0.545,0 1.079,-0.148 1.546,-0.429 l20.812,-12.512 l1.813,49.53 C94.332001,88.085999 63.011002,91.166 49.541,91.166  z " id="path1"></path></svg>
                  <p>Casper</p>
                </router-link>
            </li>
            <p class="copyright">Design and Develop by Xindi Xu <i class="fas fa-heart"></i></p>
        </template>

    </navbar>
    <!-- End Navbar Primary -->
  </div>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'app-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
    toggled: Boolean
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style>
.nav-brand:hover {
  text-decoration: none;
}
.copyright{
  padding: 0 14px;
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 75px;
}
</style>
