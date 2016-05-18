import { expect } from 'chai'
import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import App from './App'

describe('<App />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    mount(<App />)
    expect(App.prototype.componentDidMount.calledOnce).to.be.true
    App.prototype.componentDidMount.restore()
  })
})
