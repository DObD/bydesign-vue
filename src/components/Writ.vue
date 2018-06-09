<template>
  <div class="writ">
    <article v-for="(post, idx) in posts" :key="idx">
      <div class="writ-content">
          <header>
            <img :src="post.feature_image" class="writ-image"/>
            <h1>{{ post.title }}</h1>
            <div>{{ post.tag }}</div>
          </header>
          <div v-html="post.content" class="content"></div>
          <footer></footer>
      </div>
    </article>
  </div>
</template>

<script>
import { db, pathSlug } from '@/main'
// export let postTitle = posts.title

export default {
  name: 'Writ',
  data () {
    return {
      posts: [],
      slug: pathSlug
    }
  },
  firestore () {
    return {
      posts: db.collection('posts').where('slug', '==', pathSlug)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

h1 {
  display: block;
}
.writ {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  width: 100vw;
  justify-content: space-around;
  margin: 0 auto;
}
.writ-image {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  max-height: 600px;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.writ-content {
  color: #fff;
  h1 {
    color: #fff;
  }
  header {
    max-height: 600px;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  .content {
    color: #000;
    max-width: 700px;
    width: 100%;
    text-align: left;
    margin: 2rem auto 2rem;
    position: relative;
    object-fit: contain;
    overflow: hidden;

  }
}
.writ-content .content > p {
  width: 100%;
  display: block;
}
.writ-content .content > p > img {
    max-width: 700px;
    max-height: 350px;
    width: 100%;
    object-fit: cover;
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
}
</style>
