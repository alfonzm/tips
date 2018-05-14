<template lang="pug">
  section.container
    h2.title hello world
    ul
      li(v-for="(category, index) in categories" :key="index")
        nuxt-link(:to="'/categories/' + category.name") {{ category.name }}
</template>

<script>
import axios from '~/plugins/axios'
import slug from 'slug'

export default {
  mounted () {
  },
  async asyncData () {
    let { data } = await axios.get('/api/categories')
    return { categories: data }
  },
  methods: {
    slug: (string) => {
      return slug(string)
    }
  }
  // head () {
  //   return {
  //     title: 'Categories'
  //   }
  // }
}
</script>