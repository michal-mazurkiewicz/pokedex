// @ts-nocheck

import { loader } from "../../../store/middleware/loader"

export const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = action => loader(store)(next)(action)

    return { store, next, invoke }
}