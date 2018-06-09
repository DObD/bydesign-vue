<template>
  <div class="mobile-footer">
    <a href="tel:+18314717441" rel="nofollow">
      <button><font-awesome-icon :icon="getPhone" />phone</button>
    </a>
    <a>
      <button class="menu"><svgicon name='dd-r-out' width='30' height='30' color="#37474f"/>menu</button>
    </a>
    <a href="mailto:iam@darrenby.design" rel="nofollow">
      <button><font-awesome-icon :icon="getPlane" />email</button>
    </a>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'

export default {
  name: 'MobileFooter',
  computed: {
    getPhone () {
      return faPhone
    },
    getPlane () {
      return faPaperPlane
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
  .mobile-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,.9);
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: end;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.37);
    @media screen and (min-width: 795px) {
      display: none;
    }
  }
  [data-prefix="fas"],
  .svg-icon {
    display: block;
    margin: 0 auto;
  }
  button {
    border: transparent;
    background-color: transparent;
    padding: .5rem;
    width: 100%;
  }
</style>
