<template>
    <footer class="footer">
          <quick-menu :menu-count="count"
                      :icon-class="icons"
                      :menu-url-list="list"
                      :position="position"
                      :backgroundColor="backgroundColor"></quick-menu>
    </footer>
</template>
<script>
import { quickMenu } from '@/components';
export default {
  props: {
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      count: 4,
      icons: ["fab fa-github","fab fa-linkedin-in","fas fa-envelope","fab fa-youtube"],
      list: [
        {
          isLink:false,
          url:"https://github.com/xindixu"
        },
        {
          isLink:false,
          url:"https://www.linkedin.com/in/xindi-xu/"
        },
        {
          isLink:false,
          url:"mailto:xindixu@utexas.edu"
        },
        {
          isLink:false,
          url:"https://www.youtube.com/channel/UCWnA13M9WCIXbl9yl4qs6_Q"
        }
      ],
      position: 'bottom-left',
      backgroundColor: '#E2B4BD'
    };
  },
  components: {
    quickMenu
  }
};
</script>
<style>
footer{
  z-index: 100;
}
</style>
