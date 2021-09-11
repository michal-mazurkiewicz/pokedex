import { getPokemons } from "../../api/api";
import { setPokemon } from "../reducers/pokemon-reducer";
import { AppThunk } from "../store";



export const getInitialData = () : AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonData = await getPokemons()
    dispatch(setPokemon(pokemonData))
}