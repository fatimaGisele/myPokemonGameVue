import axios from "axios";
const URL_BASE = 'https://pokeapi.co/api/v2/pokemon'

const getPokeArray = () =>{
    const pokeArray = Array.from( Array(150) )
    return pokeArray.map((_, index) => index+1)
}

export const getPokeOpt = async() => {
    const pokeMix = getPokeArray().sort(()=>(Math.random()-0.5)).splice(0,4)
    const pokeData = await pokeName(pokeMix)
    return pokeData
}

const pokeName = async([a,b,c,d] = []) => {
    const allPokemons = [
        await axios.get(`${URL_BASE}/${a}`),
        await axios.get(`${URL_BASE}/${b}`),
        await axios.get(`${URL_BASE}/${c}`),
        await axios.get(`${URL_BASE}/${d}`)
    ]
    const response = await Promise.all(allPokemons)
    
    const dataArray= response.map((e=>(e.data)))
    const [n1, n2, n3, n4] = dataArray

    return [
        {name: n1.name, id:n1.id},
        {name: n2.name, id:n2.id},
        {name: n3.name, id:n3.id},
        {name: n4.name, id:n4.id}
    ]
}
   