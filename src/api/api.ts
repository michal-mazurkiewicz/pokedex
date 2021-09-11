import axios from "axios"

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemons = async () => {
    return (await axios.get(baseURL)).data
}