<template>
  <h1 v-if="!p">...Cargando</h1>
  <div v-else>
    <h3>¿Que Pokemon es?</h3>
    <PokemonImg :pokeId="p.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokeGroup="pokemonsGroup" @selectPokemon="select"/>
    <h2>{{msg}}</h2>
    <button @click="startAgain" class="button">Jugar otra vez</button>
  </div>
</template>

<script>
import PokemonImg from '../components/PokemonImg.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

import { getPokeOpt } from '@/helpers/pokemonOptions.js'

export default {
  components:{
    PokemonImg,
    PokemonOptions
  },
  data(){
    return{
      pokemonsGroup: [],
      p: null,
      showPokemon: false,
      msg: ''
    }
  },
  methods:{
    async pokemonMix(){
      this.pokemonsGroup = await getPokeOpt()  
      const rnd = Math.floor(Math.random()*4) 
      this.p = this.pokemonsGroup[rnd]
      console.log(this.p);
    },
    select(id){
      if(this.p.id===id){
        this.showPokemon=true
        this.msg =`Acertaste es ${this.p.name}`
      }else{
        this.msg = `Fallaste`
      }
    },
    startAgain(){
      this.pokemonsGroup = []
      this.p = null
      this.showPokemon =false
      this.msg = ''
      this.pokemonMix()
    }
  },
  mounted() {
    this.pokemonMix()
  }
}
</script>

<style scoped>
.button{
  background-color: white;
    border-radius: 15px;
    border: 1px solid rgba(224, 7, 79, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 150px;
    height: 50px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
}
.button:hover{
  background-color: rgba(224, 7, 79, 0.2);
}
</style>
