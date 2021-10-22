<template>
  <div class="container">
    <ul>
      <li v-for="p in pokeGroup" 
      :key="p.id" @click="$emit('selectPokemon', p.id)">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    pokeGroup:{
      type: Array,
      required: true
    }
  },
   data(){
     return{
       
     }
   }
}
</script>
 
<style>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.container {
    display: flex;
    justify-content: center;
}
</style>