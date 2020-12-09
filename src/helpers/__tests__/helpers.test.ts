import * as helpers from '../index'

describe('Helpers as helping function', () => {
  it('Should width_screen defined', () => {
    expect(helpers.WIDTH_SCREEN).toBeDefined()
  })
  it('Should height_screen defined', () => {
    expect(helpers.HEIGHT_SCREEN).toBeDefined()
  })
  it('Should isAndroid defined', () => {
    expect(helpers.IS_ANDROID).toBeDefined()
  })
})