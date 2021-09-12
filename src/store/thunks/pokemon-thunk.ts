import { getPokemons } from "../../api/api";
import { PokemonsDTO } from "../../entities/api-entities";
import { setPage, setPokemons } from "../reducers/pokemon-reducer";
import { AppThunk } from "../store";



export const getInitialData = (): AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonData: PokemonsDTO = await getPokemons({ limit: 898 })
    dispatch(setPokemons(pokemonData))
}

export const getPokemon = (): AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonData: PokemonsDTO = await getPokemons({ limit: 898 })
    dispatch(setPokemons(pokemonData))
}


export const changePage = (newPage: number): AppThunk<Promise<void>> => async (dispatch, getState) => {
    const { limit } = getState().pokemonReducer
    const offset = newPage === 1 ? 0 : (newPage - 1) * limit;
    const params = { offset, limit, newPage };
    dispatch(setPage(params))
}