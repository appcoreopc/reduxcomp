export default function counter(state = 0, action) {
  switch (action.type) {
    case 'HELLO':
       console.log('hello')
      return state + 1
    default:
      return state
  }
}
