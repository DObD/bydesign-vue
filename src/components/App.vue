<template>
  <div id="app" class="app-view">
    <topbar v-if="!splashScreenDisplayed" />

    <section>
      <router-view />
    </section>
    <mobilefooter />
  </div>
</template>

<script>
import TopBar from './TopBar'
import About from './About'
import MobileFooter from './MobileFooter'

export default {
  name: 'App',
  components: {
    'topbar': TopBar,
    'about': About,
    'mobilefooter': MobileFooter
  },
  computed: {
    splashScreenDisplayed: function () {
      if (this.$route.path === '/') {
        return true
      }
      return false
    }

  }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/global.scss';

#app {
  font-family: $primary-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-4;
  // margin-top: 60px;
}
</style>
