export default function generateId () {
  return Math.random().toString(36).replace(/[^a-z]+/g, '')
}
