import { useState } from 'react';
export function App() {
	const [todoList, setTodoList] = useState(['hello', 'test']);
	const [state, setState] = useState(0);

	function handleCount(e) {
		//# 此處收到的e 會是event 事件資料
		setState(e.target.value);
	}
	function handelSubmit() {
		// const newList = [...todoList, state];

		// setTodoList(newList);
		setTodoList((currentTodo) => {
			return [...currentTodo, state];
		});
	}

	return (
		<>
			<div
				style={{
					margin: '4rem',
					display: 'flex',
					alignItem: 'center',
					flexDirection: 'column',
				}}>
				<input
					type="text"
					onChange={handleCount}
					style={{ marginBottom: '10px' }}
				/>
				<button onClick={handelSubmit}>submit</button>
				{todoList.map((item, index) => (
					<div
						style={{ display: 'flex' }}
						key={item}>
						<input type="checkbox" />
						<div>
							#{index + 1}-{item}
						</div>
					</div>
				))}
			</div>
		</>
	);
}

// export default App
