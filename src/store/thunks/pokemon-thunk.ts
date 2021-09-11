import { getPokemons } from "../../api/api";
import { ChangePageParams, PokemonsDTO } from "../../entities/api-entities";
import { setPage, setPokemons } from "../reducers/pokemon-reducer";
import { AppThunk } from "../store";



export const getInitialData = (): AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonData: PokemonsDTO = await getPokemons({ limit: 2000 })
    dispatch(setPokemons(pokemonData))
}

export const changePage = (params: ChangePageParams): AppThunk<Promise<void>> => async (dispatch) => {
    dispatch(setPage(params))
}