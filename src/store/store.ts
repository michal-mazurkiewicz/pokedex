import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import pokemonReducer from "./reducers/pokemon-reducer";

const store = configureStore({
    reducer: { appReducer: appReducer, pokemonReducer: pokemonReducer },
    middleware: () => []
})

export type RootState = ReturnType<typeof store.getState>
export type AppTHunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch
export default store;