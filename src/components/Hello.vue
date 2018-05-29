<template>
  <div class="hello">
    <svgicon name='dd-r-out' width='200' height='200' class="svg-drop-shadow"></svgicon>
    <h1>{{ msg }}</h1>
    <!-- <h2>Strategy | Design | Development | Marketing</h2> -->
  </div>
</template>

<script>
import './icons'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Invite innovation!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../scss/variables.scss';

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $color-2;
}
.hello img {
  filter: drop-shadow(3px 8px 7px rgba(0,0,0,.25));
}
</style>
