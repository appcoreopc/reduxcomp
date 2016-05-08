const login = (state, action)  => 
{  
  switch (action.type)  {
    case 'LOGIN':
	    return { 
	    	username : action.username, 
	    	password : action.password,
	    	url : action.url,
	    	message : action.message, 
	    	isPending : action.isPending
	    }
    default: 
	      return {
	     	
	      }
  }
}

export default login
