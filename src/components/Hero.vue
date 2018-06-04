<template>
  <div class="hero">
    <h1>{{ hero }}</h1>
  </div>
</template>

<script>
import { title } from '@/main'
// import { postTitle } from '@/components/Writ'
export default {
  name: 'Hero',
  data () {
    return {
      hero: title
    }
  }
}
</script>

<style scoped>

</style>
