import Reio from '../'
import isEqual from 'lodash/isEqual'

test('lib should be tested', () => {
  const reio = new Reio({shubham: 'Shubham'})
  const finalState = reio.add({shivam: 'Shivam', manu: {name: 'Name'}})
  const bool = isEqual(finalState, {
    shivam: 'Shivam',
    shubham: 'Shubham',
    manu: {name: 'Name'},
  })
  expect(bool).toBe(true)
})
