<template>
  <ul>
    <router-link to="/"><li>Home</li></router-link>
    <router-link to="/writings"><li>Writings</li></router-link>
  </ul>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 795px) {
    display: none;
  }
}
li {
  display: inline-block;
  padding: .5rem 1.5rem;
}
</style>
