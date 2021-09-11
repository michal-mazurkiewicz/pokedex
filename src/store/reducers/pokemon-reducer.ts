import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { PokemonState } from "../../entities/pokemon-entities";
import { RootState } from "../store";


const initialState: PokemonState = {
    pokemon: {},

}

export const pokemonSlice: Slice<PokemonState> = createSlice({
    name: 'app-reducer',
    initialState,
    reducers:{
        setPokemon: (state: PokemonState, action: PayloadAction<Object>) => {
            state.pokemon = action.payload
        }
    }
})

export const {setPokemon} = pokemonSlice.actions
export const selectPokemonState = (state: RootState) => state.pokemonReducer
export default pokemonSlice.reducer