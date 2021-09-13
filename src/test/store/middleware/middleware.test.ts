// @ts-nocheck
import { create } from "./middleware-utils"
jest.mock("../../../api/api")


  test('passes through non-function action', async () => {
    const { next, invoke } = create()

    const action = { type: 'TEST' }
    await invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })
  
  test('calls the function', async () => {
    const { next, invoke } = create()
    const action = jest.fn()
    await invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })