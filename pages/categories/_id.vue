<template lang="pug">
  section.container
    h2.title category: {{ category.name }}
    ul
      li(v-for="(tip, index) in category.tips" :key="index")
        nuxt-link(:to="'/tips/' + tip.slug") {{ tip.title }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  mounted () {
  },
  async asyncData ({ params }) {
    const category = await axios.get('/api/categories/' + params.id)
    return {
      category: category.data
    }
  }
}
</script>