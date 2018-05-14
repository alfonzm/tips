<template lang="pug">
  section.container
    h2.title hello world
    ul
      li(v-for="(category, index) in categories" :key="index")
        nuxt-link(:to="'/categories/' + category.slug") {{ category.name }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  mounted () {
  },
  async asyncData () {
    let { data } = await axios.get('/api/categories')
    return { categories: data }
  }
}
</script>