<template lang="pug">
  section.container
    h2.title {{ tip.title }}
    p {{ tip.text }}
    div
      h3 Catgories
      ul
        li(v-for="(category, index) in tip.categories" v-if="tip.categories.length > 0")
          nuxt-link(:to="`/categories/${slug(category)}`") {{ category }}
</template>

<script>
import axios from '~/plugins/axios'
import slug from 'slug'

export default {
  mounted () {
  },
  async asyncData ({ params }) {
    let { data } = await axios.get('/api/tips', { params: { slug: params.id } })
    return { tip: data[0] }
  },
  methods: {
    slug: function (string) {
      return slug(string)
    }
  }
}
</script>