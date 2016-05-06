const login = (state = 1, action)  => 
{
  console.log(action.type)

  switch (action.type)  {
    case 'LOGIN':
    	console.log('login ....')
    return state
    default: 
      return state
  }
}

export default login
