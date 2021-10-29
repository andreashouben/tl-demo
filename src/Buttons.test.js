import {render, screen} from '@testing-library/react'
import {shallow, configure} from 'enzyme'
import Buttons from './Buttons'
import Adapter from 'enzyme-adapter-react-16'

describe('App', () => {
  test('testing-library', () => {
    render(<Buttons />)

    screen.logTestingPlaygroundURL()

    screen.getByRole('button', {
      name: /leftbutton/i,
    })
  })

  test.skip('enzyme', () => {
    configure({adapter: new Adapter()})
    const wrapper = shallow(<Buttons />)
    const leftButton = wrapper.find('button.red')
    console.log(leftButton.html())
  })
})
