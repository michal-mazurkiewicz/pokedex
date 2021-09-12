import { getPokemons } from "../../api/api";
import { ChangePageParams, PokemonDTO, PokemonsDTO } from "../../entities/api-entities";
import { setPage, setPokemons, setSelected } from "../reducers/pokemon-reducer";
import { AppThunk } from "../store";



export const getInitialData = (): AppThunk<Promise<void>> => async (dispatch) => {
    const pokemonData: PokemonsDTO = await getPokemons({ limit: 898 })
    dispatch(setPokemons(pokemonData))
}

export const changePage = (params: ChangePageParams): AppThunk<Promise<void>> => async (dispatch) => {
    dispatch(setPage(params))
}

export const selectPokemon = (pokemon?: PokemonDTO): AppThunk => async (dispatch) => {
    dispatch(setSelected(pokemon))
}