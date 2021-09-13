import { AnyAction } from 'redux'
import { AppState, ViewState } from '../../entities/app-entities'
import reducer, { setViewState } from '../../store/reducers/app-reducer'

test('should return the initial state', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(
    {
      error: undefined,
      viewState: "SUCCESS"
    }
  )
})

test('should handle a viewState being set to Loading', () => {
  const previousState: any = {}
  expect(reducer(previousState, setViewState(ViewState.LOADING))).toEqual({
    error: undefined,
    viewState: "LOADING"
  })
})

test('should handle a viewState being set to Error', () => {
  const previousState : AppState = {
    error: undefined,
    viewState: ViewState.LOADING
  }
  expect(reducer(previousState, setViewState(ViewState.ERROR))).toEqual({
    error: undefined,
    viewState: "ERROR"
  })
})