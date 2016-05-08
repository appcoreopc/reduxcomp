const forgotpassword = (state, action)  => {
	switch(action.type)
	{
		case 'FORGOT_PASSWORD':
		  return {
			email : action.email,
	    	message : action.message
		  }
		default : 
			return {
				email : action.email,
	    		message : action.message
	    	 };
	}
}

export default forgotpassword