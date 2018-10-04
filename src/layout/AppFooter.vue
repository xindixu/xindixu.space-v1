<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}">
          <div class="icon">
              <i class="now-ui-icons travel_info"/>
          </div>
    </footer>
</template>
<script>
export default {
  props: {
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
