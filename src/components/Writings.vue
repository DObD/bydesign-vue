<template>
  <main class="site-main outer">
    <div class="inner">
      <article v-for="(post, idx) in posts" :key="idx" class="post-card">
        <a :href="'/writ/'+post.slug" class="post-card-image-link"><img :src="post.feature_image" class="post-card-image"/></a>
        <div class="post-card-content">
          <a :href="'/writ/'+post.slug" class="post-card-content-link">
            <header>
              <div class="tag">{{ post.tag }}</div>
              <h3>{{ post.title }}</h3>
            </header>
            <div>{{ post.summary }}</div>
            <footer>{{ post.date }}</footer>
          </a>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import { db } from '@/main'

export default {
  name: 'Writings',
  data () {
    return {
      posts: [],
      title: '',
      tag: '',
      feature_image: '',
      slug: '',
      msg: 'Random Ramblings'
    }
  },
  firestore () {
    return {
      posts: db.collection('posts').orderBy('date', 'desc')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/global';

.inner {
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 8vw;
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
  color: $color-5;
}
header {
  padding: 1rem 0;
}
footer {
  font-size: .9rem;
}
.tag {
  font-size: .9rem;
  font-variant: small-caps;
}
h3 {
  margin: 0;
}
@media (min-width: 795px) {
  .post-card:nth-child(6n+1):not(.no-image) {
    flex: 1 1 100%;
    flex-direction: row;
  }

  .post-card:nth-child(6n+1):not(.no-image) .post-card-image-link {
    position: relative;
    flex: 1 1 auto;
    border-radius: 5px 0 0 5px;
  }

  .post-card:nth-child(6n+1):not(.no-image) .post-card-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .post-card:nth-child(6n+1):not(.no-image) .post-card-content {
    flex: 0 1 357px;
    height: 100%;
  }

  .post-card:nth-child(6n+1):not(.no-image) .post-card-content-link {
    // padding: 0 1rem 0;
    height: 100%;
  }

  .post-card:nth-child(6n+1):not(.no-image) .post-card-meta {
    padding: 0 1rem 30px;
  }
}

.post-card {
  position: relative;
  flex: 1 1 300px;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff 50%;
  background-size: auto auto;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39,44,49,.06),1px 3px 8px rgba(39,44,49,.03);
  transition: all .5s ease;
  // padding: 0 0 2rem;
  text-align: left;

  &:nth-child(6n+1):not(.no-image) {
    flex: 1 1 100%;
    flex-direction: columns;
    display: flex;
  }

}
.post-card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
}
.post-card-content-link {
  height: 100%;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-flow: column;
  padding: 0 1rem 0;

  footer {
    padding: 1rem 0 1rem
  }
}

.post-card-image {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
