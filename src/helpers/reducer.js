function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'FIRSTNAME_CHANGE':
			return { ...state, firstName: payload };
		case 'LASTNAME_CHANGE':
			return { ...state, lastName: payload };
		case 'EMAILADDRESS_CHANGE':
			return { ...state, emailAddress: payload };
		case 'PASSWORD_CHANGE':
			return { ...state, password: payload };

		// For errors
		case 'FIRSTNAME_ERROR':
			return { ...state, isFirstNameError: true };
		case 'LASTNAME_ERROR':
			return { ...state, isLastNameError: true };
		case 'EMAILADDRESS_ERROR':
			return { ...state, isEmailAddressError: true };
		case 'PASSWORD_ERROR':
			return { ...state, isPasswordError: true };

		// Removing errors on input
		case 'REMOVE_FIRSTNAME_ERROR':
			return { ...state, isFirstNameError: false };
		case 'REMOVE_LASTNAME_ERROR':
			return { ...state, isLastNameError: false };
		case 'REMOVE_EMAILADDRESS_ERROR':
			return { ...state, isEmailAddressError: false };
		case 'REMOVE_PASSWORD_ERROR':
			return { ...state, isPasswordError: false };

		case 'FORM_VALIDATED':
			return {
				...state,
				firstName: '',
				lastName: '',
				emailAddress: '',
				password: '',
				isFirstNameError: false,
				isLastNameError: false,
				isEmailAddressError: false,
				isPasswordError: false,
			};

		default:
			// throw new Error('Invalid request!');
			return { ...state };
	}
}

export default reducer;
