export function initCanvas (canvasId) {
  return {
    type: 'INIT_CANVAS',
    canvasId
  }
}

export function setChoice (cubeIndex) {
  return {
    type: 'SET_CHOICE',
    cubeIndex
  }
}

export function getChoice (cubeIndex) {
  return {
    type: 'GET_CHOICE',
    cubeIndex
  }
}
