import { getPokemons } from "../../api/api";
import { PokemonsDTO } from "../../entities/api-entities";
import { setPage, setPokemons, setFiltered } from "../reducers/pokemon-reducer";
import { AppThunk } from "../store";



export const getInitialData = (): AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonsData: PokemonsDTO = await getPokemons({ limit: 898 })
    dispatch(setPokemons(pokemonsData))
    dispatch(setFiltered(pokemonsData))
}



export const changePage = (newPage: number): AppThunk<Promise<void>> => async (dispatch, getState) => {
    const { limit } = getState().pokemonReducer
    const offset = newPage === 1 ? 0 : (newPage - 1) * limit;
    const params = { offset, limit, newPage };
    dispatch(setPage(params))
}