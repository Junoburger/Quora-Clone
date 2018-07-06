import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

// export const ADD_USER = "ADD_USER"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const login = (email, password) => (dispatch) => {
	request
		.post(`${baseUrl}/logins`)
		.send({ email, password })
		.then(result => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: result.body
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: LOGIN_FAILURE,
					payload: err.response.body.message || 'Unknown error'
				})
			} else {
				console.error(err)
			}
		})
}

export const signUp = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ email, password })
		.then(result => {
			dispatch({
				type: SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: SIGNUP_FAILURE,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})