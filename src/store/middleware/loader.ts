import { ViewState } from "../../entities/app-entities";
import { setError, setViewState } from "../reducers/app-reducer";
let asyncStack = 0;

export const loader = () => (next: any) => async (action: any) => {
    if(typeof action === 'function'){
        try {
            const returnValue = next(action)
            if(typeof returnValue?.then === 'function'){
                asyncStack++
                if(asyncStack === 1) next(setViewState(ViewState.LOADING))
                await returnValue
                asyncStack--
                if(asyncStack === 0) next(setViewState(ViewState.SUCCESS))
                return
            }
            return
        } catch (error) {
            asyncStack--
            next(setError(error))
            return
        }
    }
    const returnValue = next(action)
    return returnValue
} 