import { INITIAL_TASKS } from './../consts.js'
import { ADD_TASK, REMOVE_TASK } from './types.js'

export const tasksReducer = (state = INITIAL_TASKS, action) => {

	console.log(action)

	switch (action.type) {
		case ADD_TASK:
			let { newTaskTitle, newTaskTask } = action
			return [
				...state,
				{
					title: newTaskTitle,
					task: newTaskTask,
					id: state.length
				}					
			]	
		
		case REMOVE_TASK:
		let { id } = action
			return [ ...state.filter(item => item.id !== id) ]

		
		default:
			return state		
	}
}
