import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it(`handles actions of type SAVE_COMMENT`, () => {
  const testComment = 'Test Comment'
  const action = {
    type: SAVE_COMMENT,
    payload: testComment
  }
  const initialState = []
  const expectedNewState = [testComment]
  const newState = commentsReducer(initialState, action)
  expect(newState).toEqual(expectedNewState)
})

it('handles action with unknown type', () => {
  const initialState = []
  const newState = commentsReducer(initialState, { type: 'THISTYPEDOESNOTEXIST' })
  expect(newState).toEqual(initialState)
})
