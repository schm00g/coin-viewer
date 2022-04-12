<template>
  <div>
    <CoinTable />
  </div>
</template>

<script>
// TODO: rework state/store
export default {
  name: 'IndexPage',
  methods: {
    increment(state){
        this.$store.commit('increment');
    }
  }
}
</script>
