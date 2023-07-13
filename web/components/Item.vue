<template>
  <div>
    <p>{{ item.title }}</p>
    <p>{{ count }}</p>
    <button @click="onCount">click me</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      count: 0
    }
  },
  asyncData({ store, route }) {
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id] || {}
    }
  },
  methods: {
    onCount() {
      this.count++
    }
  }
}
</script>