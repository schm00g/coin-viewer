<template>
  <div>
    <CoinTable />
    {{ $store.state.title }}
    <button @click="increment"> Increment Me! {{ $store.state.counter }}</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    increment(state){
        this.$store.commit('increment');
    }
  }
}
</script>
