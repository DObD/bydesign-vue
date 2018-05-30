<template>
  <div class="hello">
    <div>
      <ul class="menu">
        <!-- <li>
          <a>Blog</a>
        </li> -->
        <li>
          <a>Work</a>
        </li>
      </ul>
      <svgicon name='dd-r-out' width='200' height='200' class="svg-drop-shadow" ></svgicon>
      <h1>{{ msg }}</h1>
    </div>
    <div class="card yellow">
      <article>
        <h3>Strategy</h3>
        <p>Every single project worked on begins with a thorough, often intense planning process. I involve key in-house experts and decision makers as needed to ensure that your plan is sound and successful.</p>
      </article>
    </div>
    <!-- <div class="card green">
      <h3>Design</h3>
      <p></p>
    </div> -->
    <div class="card peri">
      <article>
        <h3>Branding</h3>
        <p>People always have the sweetest things to say to you. Have you ever wondered what they say when you aren't there? This is your brand. Make sure that what they say to others about you is accurate and how you want to be seen.</p>
      </article>
    </div>
    <div class="card green">
      <article>
        <h3>Marketing</h3>
        <p>Having a perfect pitch won’t do you any good if it isn’t pitched at the right time and place. And with the plethora of mediums out there today, that’s not easy. Ensure every dollar you spend contributes towards your success.</p>
      </article>
    </div>
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
  padding: 0 0 2rem;
}
li {
  // display: inline-block;
  font-size: 3rem;
  margin: 0 10px;
}
a {
  color: $color-5;
}
.hello > div {
  height: 100vh;
  display: grid;
  align-content: center;
  // justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
}
.hello svg.svg-icon {
  margin: 0 auto;
}
.card {
  position: relative;
}
.card > article {
  position: absolute;
  text-align: left;
  bottom: 4rem;
  padding: 0 1rem;
}
.yellow {
  background-color: map-get($logo-colors, 'bg5')
}
.green {
  background-color: map-get($logo-colors, 'bg4')
}
.peri {
  background-color: map-get($logo-colors, 'bg9')
}
.grey {
  background-color: map-get($logo-colors, 'bg11')
}
</style>
