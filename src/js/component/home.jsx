import React, { useState } from 'react';

export const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [listTasks, setListTasks] = useState([]);

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
		// console.log(inputValue);
	}

	const saveTask = (e) => {
		e.preventDefault();
		setListTasks(prevState => [...prevState, inputValue.trim()])
		setInputValue("")
	}

	const deleteTask = (taskToDelete) => {
		// console.log(taskToDelete.trim())
		setListTasks(listTasks.filter(task => task !== taskToDelete.trim()));
	}

	return (
		<div className="container text-center w-25">
			<h1 className="text-black text-opacity-25 fw-light" style={{ fontSize: "7.5rem" }}>todos</h1>
			<form onSubmit={saveTask}>
				<input
					autoFocus={true}
					className="border p-3 w-100 no-outline text-black text-opacity-50"
					value={inputValue}
					placeholder="What needs to be done?"
					onChange={handleOnChange}
				/>
				{/* <button type='submit'>Enviar</button> */}
			</form>
			<ul className='list-group'>
				{listTasks.map((task, index) => (
					<li key={index} className='list-group-item rounded-0 border border-top-0 text-black text-opacity-50 text-start d-flex align-items-center task-item'>
						{task}
						<button onClick={() => deleteTask(task)} className='btn ms-auto text-black text-opacity-50 border-0 task-button'><i className="fa-solid fa-x"></i></button>
					</li>
				))}
			</ul>
			{listTasks.length !== 0 ?
				<>
				<div className="border border-top-0" style={{ height: "1.5rem" }}>
					<span className="fs-6 fw-light text-black text-opacity-50 float-end pe-2">
						{listTasks.length} item left
					</span>
				</div>
				<div className="border border-top-0 mx-auto" style={{ width: "95%", height: "0.25rem" }} />
				<div className="border border-top-0 mx-auto" style={{ width: "90%", height: "0.25rem" }} />
				</>
				: 
				<>
				<div className="border border-top-0 bg-danger-subtle" style={{ height: "1.5rem" }}>
					<span className="fs-6 fw-normal text-danger text-opacity-75">
						No hay tareas, añadir tareas
					</span>
				</div>
				</>
			}
		</div>
	);
}
