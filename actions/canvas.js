export function setChoice (cubeIndex) {
  return {
    type: 'setChoice',
    cubeIndex
  }
}

export function getChoice (cubeIndex) {
  return {
    type: 'getChoice',
    cubeIndex
  }
}
