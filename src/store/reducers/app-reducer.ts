import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { AppState, ViewState } from "../../entities/app-entities";
import { RootState } from "../store";

const initialState: AppState = {
    viewState: ViewState.SUCCESS,
    error: undefined
}

export const appSlice: Slice<AppState> = createSlice({
    name: 'app-reducer',
    initialState,
    reducers:{
        setViewState: (state: AppState, action: PayloadAction<ViewState>) => {
            state.viewState = action.payload
        },
        setError: (state: AppState, action: PayloadAction<Error>) => {
            state.error = action.payload.message
        }
    }
})

export const {setViewState, setError} = appSlice.actions
export const selectAppState = (state: RootState) => state.appReducer
export default appSlice.reducer