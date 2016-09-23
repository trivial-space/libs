import * as entitySpec from '../../lib/flow/entity-spec'
import {expect} from 'chai'


describe('flow entitySpec', function () {

  describe('processProcessSpec', function() {

    const {processProcessSpec} = entitySpec


    it('from minimal process spec', function () {
      const p = () => 100
      const spec = {do: p}

      expect(processProcessSpec("e", spec)).to.deep.equal({
        entities: [],
        processes: [{
          id: "e-stream",
          procedure: p,
        }],
        arcs: [{
          process: "e-stream",
          entity: "e"
        }]
      })
    })


    it('takes other valid process props', function () {
      const p = () => 100
      const spec = {
        do: p,
        autostart: true,
        async: true,
        meta: {foo: "foo"}
      }

      expect(processProcessSpec("e", spec)).to.deep.equal({
        entities: [],
        processes: [{
          id: "e-stream",
          procedure: p,
          autostart: true,
          async: true,
          meta: {foo: "foo"}
        }],
        arcs: [{
          process: "e-stream",
          entity: "e"
        }]
      })
    })


    it('from process spec with vals', function () {
      const p = ({e1, e2, e3}) => e1 + e2 + e3

      const spec = {
        vals: {
          e1: "H entity1",
          e3: "C entity3",
          e2: "A"
        },
        do: p
      }

      expect(processProcessSpec("entity2", spec)).to.deep.equal({
        entities: [],
        processes: [{
          id: "entity2-stream",
          procedure: p,
          ports: {
            e1: "HOT",
            e2: "ACCUMULATOR",
            e3: "COLD"
          }
        }],
        arcs: [{
          process: "entity2-stream",
          entity: "entity2"
        }, {
          entity: "entity1",
          process: "entity2-stream",
          port: "e1"
        }, {
          entity: "entity3",
          process: "entity2-stream",
          port: "e3"
        }]
      })
    })


    it('takes an optional path parameter and resolves entities inside the same path', function () {

      const p = ({e2, e3}) => e2 + e3

      const spec = {
        vals: {
          e2: "H entity2",
          e3: "C #entity3",
        },
        do: p
      }

      expect(processProcessSpec("entity1", spec, "some.namespace")).to.deep.equal({
        entities: [],
        processes: [{
          id: "some.namespace.entity1-stream",
          procedure: p,
          ports: {
            e2: "HOT",
            e3: "COLD"
          }
        }],
        arcs: [{
          process: "some.namespace.entity1-stream",
          entity: "some.namespace.entity1"
        }, {
          entity: "entity2",
          process: "some.namespace.entity1-stream",
          port: "e2"
        }, {
          entity: "some.namespace.entity3",
          process: "some.namespace.entity1-stream",
          port: "e3"
        }]
      })

    })
  })


  describe('processEntitySpec', function() {

    const {processEntitySpec} = entitySpec


    it('from entity spec with value', function () {

      const spec = { value: 10 }

      expect(processEntitySpec("e1", spec)).to.deep.equal({
        entities: [{
          id: "e1",
          value: 10
        }],
        processes: [],
        arcs: []
      })
    })


    it('takes an optional path parameter', function () {

      const spec = { value: 10 }

      expect(processEntitySpec("e1", spec, "fuu.bar")).to.deep.equal({
        entities: [{
          id: "fuu.bar.e1",
          value: 10
        }],
        processes: [],
        arcs: []
      })
    })


    it('from entity spec with other entity props', function () {

      const spec = { json: "10", isEvent: true, meta: {fufu: "fuuu"} }

      expect(processEntitySpec("e1", spec)).to.deep.equal({
        entities: [{
          id: "e1",
          json: "10",
          isEvent: true,
          meta: {fufu: "fuuu"}
        }],
        processes: [],
        arcs: []
      })
    })


    it('from entity spec with basic stream', function () {
      const p = ({e1}) => e1 + 20

      const spec = {
        stream: {
          vals: {
            e1: "H entity1"
          },
          do: p
        }
      }

      expect(processEntitySpec("entity2", spec)).to.deep.equal({
        entities: [{
          id: "entity2",
        }],
        processes: [{
          id: "entity2-stream",
          procedure: p,
          ports: {e1: "HOT"}
        }],
        arcs: [{
          process: "entity2-stream",
          entity: "entity2"
        }, {
          entity: "entity1",
          process: "entity2-stream",
          port: "e1"
        }]
      })

    })
  })


  describe('toGraph', function() {

    const {toGraph} = entitySpec


    it('from entity spec with value', function () {

      const spec = {
        entity1: { value: 10 },
      }

      expect(toGraph(spec)).to.deep.equal({
        entities: [{
          id: "entity1",
          value: 10
        }],
        processes: [],
        arcs: []
      })
    })


    it('from entity spec with basic stream', function () {
      const p = ({e1}) => e1 + 20

      const spec = {
        entity2: {
          stream: {
            vals: {
              e1: "H entity1"
            },
            do: p
          }
        }
      }

      expect(toGraph(spec)).to.deep.equal({
        entities: [{
          id: "entity2",
        }],
        processes: [{
          id: "entity2-stream",
          procedure: p,
          ports: {e1: "HOT"}
        }],
        arcs: [{
          process: "entity2-stream",
          entity: "entity2"
        }, {
          entity: "entity1",
          process: "entity2-stream",
          port: "e1"
        }]
      })
    })


    it('take an optional path parameter', function () {
      const p = ({e1}) => e1 + 20

      const spec = {
        entity2: {
          stream: {
            vals: {
              e1: "H #entity1"
            },
            do: p
          }
        }
      }

      expect(toGraph(spec, 'path')).to.deep.equal({
        entities: [{
          id: "path.entity2",
        }],
        processes: [{
          id: "path.entity2-stream",
          procedure: p,
          ports: {e1: "HOT"}
        }],
        arcs: [{
          process: "path.entity2-stream",
          entity: "path.entity2"
        }, {
          entity: "path.entity1",
          process: "path.entity2-stream",
          port: "e1"
        }]
      })

    })
  })
})
