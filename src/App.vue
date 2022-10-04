<template>
  <div>
    <Inside />
  </div>
</template>

<script>
import Inside from './components/Inside.vue';

export default {
  name: 'App',
  components: {
    Inside,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
