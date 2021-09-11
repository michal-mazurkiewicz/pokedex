import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { loader } from "./middleware/loader";
import appReducer from "./reducers/app-reducer";
import pokemonReducer from "./reducers/pokemon-reducer";

const store = configureStore({
    reducer: { appReducer: appReducer, pokemonReducer: pokemonReducer },
    middleware: (getDefaultMiddleware) => [loader, ...getDefaultMiddleware()]
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch
export default store;