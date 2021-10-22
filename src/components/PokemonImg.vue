<template>
  <div class="container">
    <img :src="image" 
    alt="pokemonImage" class="hiddenPokemon">
    <img :src="image"
    v-if="showPokemon" 
    alt="pokemonImage" class="fade-in">
  </div>
</template>

<script>
export default {
  props:{
    pokeId:{
      type: Number, 
      required: true
    },
    showPokemon:{
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    image(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`
    }
  }
}
</script>

<style scoped>
.hiddenPokemon{
    filter: brightness(0);
}
.container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>