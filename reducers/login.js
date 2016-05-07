const login = (state, action)  => 
{
  console.log(state)
  switch (action.type)  {
    case 'LOGIN':
	    return { 
	    	username : action.username, 
	    	password : action.password,
	    	url : action.url,
	    	message : action.message
	    }
    default: 
	      return {}
  }
}

export default login
