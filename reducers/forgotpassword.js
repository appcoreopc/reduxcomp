const forgotpassword = (state = 'FORGOT_PASSWORD', action)  => {
	switch(action.type)
	{
		case 'FORGOT_PASSWORD':
			console.log('forgot password')
		  return {
			id  : action.id, 
			text : action.text
		  }
		default : 
			return state;
	}
}

export default forgotpassword