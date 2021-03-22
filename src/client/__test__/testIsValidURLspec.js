import { isValidURL } from '../js/utils/input-is-valid'

describe('Test is valid URL functionality', () => {
  test('test is valid url defined or not', () => {
    expect(isValidURL).toBeDefined()
  })
  test('test is valid url defined or not', () => {
    expect(isValidURL('hello wowrld')).toBeFalsy()
  })
  test('test is valid url defined or not', () => {
    expect(isValidURL('http://www.google.com/')).toBeTruthy()
  })
})
