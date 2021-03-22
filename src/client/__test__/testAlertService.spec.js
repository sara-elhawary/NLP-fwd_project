import { AlertService } from '../js/services/alert.service'

const alertService = new AlertService()

describe('Test display error functionality', () => {
  test('test if display error defined or not', () => {
    expect(alertService.displayError).toBeDefined()
  })
})
