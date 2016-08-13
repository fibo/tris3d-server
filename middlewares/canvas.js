import Tris3dCanvas from 'tris3d-canvas'
import {
  setChoice
} from '../actions/canvas'

var tris3dCanvas = null

export default function canvasMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    if (action.type === 'INIT_CANVAS') {
      tris3dCanvas = new Tris3dCanvas(action.canvasId)

      tris3dCanvas.render()

      tris3dCanvas.on('setChoice', (cubeIndex) => {
        store.dispatch(setChoice(cubeIndex))
      })
    }

    if (tris3dCanvas) {
      switch (action.type) {
        case 'GET_CHOICE':
          tris3dCanvas.setChoice(action.cubeIndex)
      }
    }

    return result
  }
}
