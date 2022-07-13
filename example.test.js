const { Calculator } = require('./example.js')

describe('Example suite', () => {
  it('will work', () => {
    expect(1).toBe(1)
  })
  it('will add two numbers', () => {
    expect(new Calculator().add(2, 3)).toBe(5)
  })
  it('will multiply two numbers', () => {
    expect(new Calculator().multiply(2, 3)).toBe(6)
  })
})
