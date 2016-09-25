import * as flowCamera from '../../lib/vr/flow-camera'
import {toGraph} from '../../lib/flow/entity-spec'
import {expect} from 'chai'

describe('vr flowCamera', function () {

  it('can be parsed to a graph', function() {
    toGraph(flowCamera.camera)
  })

})
