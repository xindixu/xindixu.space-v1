import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Work from './pages/Work.vue';
import Blog from './pages/Blog.vue';
import Casper from './pages/Casper.vue';

import AppNavbar from './layout/AppNavbar.vue';
import AppFooter from './layout/AppFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/home',
      name: 'home',
      components: { default: Home, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 0 }

      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }

      }
    },
    {
      path: '/work',
      name: 'work',
      components: { default: Work, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }

      }
    },
    {
      path: '/blog',
      name: 'blog',
      components: { default: Blog, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/casper',
      name: 'casper',
      components: { default: Casper, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
