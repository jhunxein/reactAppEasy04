const changeBtnStatus = (status) => {
	const btn = document.getElementById('togglePassword');

	if (status.toLowerCase() === 'show') {
		btn.setAttribute('aria-label', 'toggle hide password');
		btn.setAttribute('aria-expanded', 'true');
		return;
	}
	btn.setAttribute('aria-expanded', 'false');
	btn.setAttribute('aria-label', 'toggle show password');
};

const togglePassword = (setShowPassword, showPassword) => {
	const pwd = document.getElementById('password');

	if (pwd.type.toLowerCase() === 'password') {
		changeBtnStatus('show');
		setShowPassword(!showPassword);
		return (pwd.type = 'text');
	}

	changeBtnStatus('hide');
	pwd.type = 'password';
	setShowPassword(!showPassword);
};

const handleSubmit = (e, dispatch) => {
	e.preventDefault();

	const event = e.target;

	if (!event.firstName.value) {
		dispatch({ type: 'FIRSTNAME_ERROR' });
	}
	if (!event.lastName.value) {
		dispatch({ type: 'LASTNAME_ERROR' });
	}
	if (!event.emailAddress.value) {
		dispatch({ type: 'EMAILADDRESS_ERROR' });
	}
	if (!event.password.value) {
		dispatch({ type: 'PASSWORD_ERROR' });
	}
};

const handleInputChange = (e, state, dispatch) => {
	const event = e.target;

	console.log(state);

	if (event.name.toLowerCase() === 'firstname') {
		dispatch({ type: 'FIRSTNAME_CHANGE', payload: event.value });

		if (state.isFirstNameError) {
			return dispatch({ type: 'REMOVE_FIRSTNAME_ERROR' });
		}
		return;
	}

	if (event.name.toLowerCase() === 'lastname') {
		dispatch({ type: 'LASTNAME_CHANGE', payload: event.value });
		if (state.isLastNameError) {
			return dispatch({ type: 'REMOVE_LASTNAME_ERROR' });
		}
		return;
	}

	if (event.name.toLowerCase() === 'emailaddress') {
		dispatch({ type: 'EMAILADDRESS_CHANGE', payload: event.value });
		if (state.isEmailAddressError) {
			return dispatch({ type: 'REMOVE_EMAILADDRESS_ERROR' });
		}
		return;
	}

	if (event.name.toLowerCase() === 'password') {
		dispatch({ type: 'PASSWORD_CHANGE', payload: event.value });
		if (state.isPasswordError) {
			return dispatch({ type: 'REMOVE_PASSWORD_ERROR' });
		}
		return;
	}

	dispatch({ type: 'FORM_VALIDATED' });
};

export { handleSubmit, handleInputChange, togglePassword };
