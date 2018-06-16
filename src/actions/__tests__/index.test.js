import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const testComment = 'Test comment'
    const action = saveComment(testComment)
    expect(action.payload).toEqual(testComment)
  })
})
