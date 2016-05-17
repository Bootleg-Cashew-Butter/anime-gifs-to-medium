import Nightmare from 'nightmare'
import {expect} from 'chai'
import sinon from 'sinon'

describe('Start page', function () {
  this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds
  var url = 'http://localhost:5050'

  it('should show the app element', function (done) {
    new Nightmare()
      .goto(url)
      .evaluate(function () {
        return document.querySelectorAll('#app').length
      }, function (result) {
        result.should.equal(1)
      })
    .run(done)
  })
})