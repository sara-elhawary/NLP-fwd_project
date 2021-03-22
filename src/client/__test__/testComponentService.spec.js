import { ComponentService } from '../js/services/component.service'

const componentService = new ComponentService()

describe('Test get result functionality', () => {
  test('test if get result defined or not', () => {
    expect(componentService.getResult).toBeDefined()
  })
})
