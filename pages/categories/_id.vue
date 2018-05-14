<template lang="pug">
  section.container
    h2.title tag
    ul
      li(v-for="(tip, index) in tips" :key="index") {{ tip.title }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  mounted () {
  },
  async asyncData ({ params }) {
    let { data } = await axios.get('/api/tips', { params: { categories: params.id } })
    return { tips: data }
  }
}
</script>