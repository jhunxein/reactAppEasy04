import React, { useState, useReducer } from 'react';
import { defObj } from './../helpers/defObj';
import reducer from './../helpers/reducer';

import {
	handleSubmit,
	handleInputChange,
	togglePassword,
} from './../helpers/functions';

import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';

function Form() {
	const [showPassword, setShowPassword] = useState(false);
	const [state, dispatch] = useReducer(reducer, defObj);

	return (
		<form onSubmit={(e) => handleSubmit(e, dispatch)}>
			<div className="title">
				<h2>
					<strong>Try it free for 7 days</strong> then $20/mo. thereafter
				</h2>
			</div>
			<div className="wrapper">
				<div className="input-wrapper">
					<label htmlFor="firstName" className="hidden">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						placeholder="First Name"
						name="firstName"
						value={state.firstName}
						className={`${state.isFirstNameError ? 'input-error' : null}`}
						onChange={(e) => handleInputChange(e, state, dispatch)}
					/>
					{state.isFirstNameError && (
						<FaExclamationCircle className="icon-inline-error" />
					)}
				</div>

				{state.isFirstNameError && (
					<p className="input-label-error">First name cannot be empty</p>
				)}

				<div className="input-wrapper">
					<label htmlFor="lastName" className="hidden">
						Last Name
					</label>
					<input
						type="text"
						placeholder="Last Name"
						id="lastName"
						name="lastName"
						value={state.lastName}
						className={`${state.isLastNameError ? 'input-error' : null}`}
						onChange={(e) => handleInputChange(e, state, dispatch)}
					/>
					{state.isLastNameError && (
						<FaExclamationCircle className="icon-inline-error" />
					)}
				</div>

				{state.isLastNameError && (
					<p className="input-label-error">Last name cannot be empty</p>
				)}

				<div className="input-wrapper">
					<label htmlFor="emailAddress" className="hidden">
						Email Adress
					</label>
					<input
						type="email"
						placeholder="Email Address"
						id="emailAddress"
						name="emailAddress"
						value={state.emailAddress}
						className={`${state.isEmailAddressError ? 'input-error' : null}`}
						onChange={(e) => handleInputChange(e, state, dispatch)}
						onLoad={(e) => e.target.focus()}
					/>
					{state.isEmailAddressError && (
						<FaExclamationCircle className="icon-inline-error" />
					)}
				</div>

				{state.isEmailAddressError && (
					<p className="input-label-error">Looks like this is not an email</p>
				)}

				<div
					className={`${
						state.isPasswordError ? 'inline-icon margin-bottom-0' : 'inline-icon'
					}`}
				>
					<div className="input-wrapper">
						<label htmlFor="password" className="hidden">
							Password
						</label>
						<input
							type="password"
							placeholder="Password"
							id="password"
							name="password"
							value={state.password}
							className={`${state.isPasswordError ? 'input-error' : null}`}
							onChange={(e) => handleInputChange(e, state, dispatch)}
						/>

						{state.isPasswordError && (
							<FaExclamationCircle className="icon-inline-error" />
						)}
					</div>
					<div className="icon-wrapper">
						<button
							type="button"
							id="togglePassword"
							aria-controls="password"
							aria-expanded="false"
							aria-label="toggle show password"
							className={`${showPassword ? 'is-active' : null}`}
							onClick={() => togglePassword(setShowPassword, showPassword)}
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
				</div>

				{state.isPasswordError && (
					<p className="input-label-error">Password cannot be empty</p>
				)}

				<button type="submit">claim your free trial</button>

				<div className="conditions">
					<p>
						By clicking the button, you are agreeing to our{' '}
						<strong>Terms and Services</strong>
					</p>
				</div>
			</div>
		</form>
	);
}

export default Form;
