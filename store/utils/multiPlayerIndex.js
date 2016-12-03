export default function multiPlayerIndex (nickname, remotePlayers) {
  for (var index = 0; index < remotePlayers.length; index++) {
    if (remotePlayers[index].nickname === nickname) return index
  }
}
