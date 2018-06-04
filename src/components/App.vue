<template>
  <div id="app" class="app-view">
    <topbar v-if="!splashScreenDisplayed" />
    <hero v-if="!splashScreenDisplayed && !writScreenDisplayed" />
    <section>
      <router-view />
    </section>
    <mobilefooter />
  </div>
</template>

<script>
import TopBar from './TopBar'
import Hero from './Hero'
import About from './About'
import MobileFooter from './MobileFooter'

export default {
  name: 'App',
  components: {
    'topbar': TopBar,
    'hero': Hero,
    'about': About,
    'mobilefooter': MobileFooter
  },
  computed: {
    splashScreenDisplayed: function () {
      if (this.$route.path === '/') {
        return true
      }
      return false
    },
    writScreenDisplayed: function () {
      if (this.$route.path >= '/writ') {
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
  padding-top: 4.25rem;
  // margin-top: 60px;
}
</style>
