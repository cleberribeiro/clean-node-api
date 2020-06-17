import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adapter', () => {
  test('return false if validator return false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBe(false)
  })
})
