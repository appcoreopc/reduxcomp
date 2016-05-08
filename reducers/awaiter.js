const awaiter = (state, action)  => 
{  
  switch (action.type)  {
    case 'AWAIT':
	    return { 
	    	isPending : action.isPending
	    }
    default: 
	      return {
	      	isPending : false
	      }
  }
}

export default awaiter
