<template>
   <Pokemon/>
</template>

<script>
import Pokemon from './Views/Pokemon'

export default {
  name: 'App',
  components: {
    Pokemon
  }
}
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
