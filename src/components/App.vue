<template>
  <div id="app" class="app-view">
    <message />
    <topbar v-if="!splashScreenDisplayed && !postEditorDisplayed" />

    <section>
        <router-view />
    </section>

    <confirm />
    <alert />
    <rendering-popup />
    <regenerate-thumbnails-popup />
    <error-popup />
    <sync-popup />

    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
