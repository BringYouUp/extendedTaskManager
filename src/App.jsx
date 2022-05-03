import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux"
import { addAnotherTask, removeAnotherTask } from './redux/actions.js'

import INITIAL_TASKS from './consts.js'

const App = () => {
	const tasks = useSelector(state => state)
	const dispatch = useDispatch()

	const inputTitleElement = useRef('null')
	const inputTaskElement = useRef(null)
  
	const handleAddAnotherTask = () => {
		let newTaskTitle = inputTitleElement.current.value
		let newTaskTask = inputTaskElement.current.value

		if (newTaskTitle.trim() || newTaskTask.trim()) {
			dispatch(addAnotherTask(newTaskTitle, newTaskTask))
			inputTitleElement.current.value = ''
			inputTaskElement.current.value = ''
		}
	}

	const handleDeleteAnotherTask = id => dispatch(removeAnotherTask(id))

	return (
		<div className="App">
			
			title<input ref={inputTitleElement} type="text" />
			<br/>
			tasks<input ref={inputTaskElement} type="text" />
			<button onClick={() => {handleAddAnotherTask()}} type="button">add task</button>

			<div>
				<h2>tasks</h2>
				{
					tasks.tasksReducer.map(({task, title, id}, index) => {
						return (
							<div key={id}>
								<h3>task №{id}</h3>
								task: {task} title: {title}
								<button onClick={() => {handleDeleteAnotherTask(id)}}>delete {id}</button>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}

export default App;
