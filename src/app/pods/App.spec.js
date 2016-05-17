import React from 'react'
import { mount } from 'enzyme'

import App from './App'

describe('<App />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    const wrapper = mount(<App/>)
    expect(App.prototype.componentDidMount.calledOnce).to.be.true
    App.prototype.componentDidMount.restore()
  });
})