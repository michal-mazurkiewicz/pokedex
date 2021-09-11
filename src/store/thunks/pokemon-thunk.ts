import { getPokemons } from "../../api/api";
import { PokemonsDTO } from "../../entities/api-entities";
import { setPokemons } from "../reducers/pokemon-reducer";
import { AppThunk } from "../store";



export const getInitialData = () : AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonData : PokemonsDTO = await getPokemons({limit: 10})
    dispatch(setPokemons(pokemonData))
}