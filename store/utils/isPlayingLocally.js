export default function isPlayingLocally (state) {
  return (state.isPlaying && (!state.isMultiPlayer))
}
