import {
	ADD_TASK,
	REMOVE_TASK
} from './types.js'

export function addAnotherTask (newTaskTitle, newTaskTask) {
	return {
		type: ADD_TASK,
		data: {
			newTaskTitle, newTaskTask
		}
	}
}

export function removeAnotherTask (id) {
	return {
		type: REMOVE_TASK,
		id
	}
}