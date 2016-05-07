const forgotpassword = (state, action)  => {
	switch(action.type)
	{
		case 'FORGOT_PASSWORD':
		  return {
			email : action.email,
	    	message : action.message
		  }
		default : 
			return { };
	}
}

export default forgotpassword