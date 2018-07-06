import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"
export const FETCH_ALL_Q = "FETCH_ALL_Q"
export const FETCH_ALL_A = "FETCH_ALL_A"
export const FETCH_ONE_Q = "FETCH_ONE_Q"
export const FETCH_ONE_A = "FETCH_ONE_A"

export const addQuestion = (newQuestion) => (dispatch) => {
	request
		.post(`${baseUrl}/add-q`)
		.then(response => dispatch({
			type: ADD_QUESTION,
			payload: response.body})
		)
		.catch(error => alert(error))
} 

export const addAnswer = (newAnswer) => (dispatch) => {
	request
		.post(`${baseUrl}/questions/:id/add-a`)
		.then(response => dispatch({
			type: ADD_ANSWER,
			payload: response.body})
		)
		.catch(error => alert(error))
} 

export const fetchOneQuestion  = (questionId) => (dispatch) => {
	request
		.get(`${baseUrl}/ads/${questionId}`)
		.then(response => dispatch({
			type: FETCH_ONE_Q,
			payload: response.body
		}))
		.catch(error => alert(error))
}

export const fetchOneAnswer  = (answerId) => (dispatch) => {
	request
		.get(`${baseUrl}/questions/${answerId}`)
		.then(response => dispatch({
			type: FETCH_ONE_A,
			payload: response.body
		}))
		.catch(error => alert(error))
}

export const fetchAllQ  = () => (dispatch) => {
	request
		.get(`${baseUrl}/questions`)
		.then(response => dispatch({
			type: FETCH_ALL_Q,
			payload: response.body
			// response.body.questions ???
		}))
		.catch(error => alert(error))
}

export const fetchAllA  = () => (dispatch) => {
	request
		.get(`${baseUrl}/questions/:id`)
		.then(response => dispatch({
			type: FETCH_ALL_A,
			payload: response.body
			// response.body.answers ???
		}))
		.catch(error => alert(error))
}