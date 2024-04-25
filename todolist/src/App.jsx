import { useState } from 'react';
import { ListItem } from './component/Item';

export function App() {
	const [todoList, setTodoList] = useState([
		{ text: '1fffffff23', checked: false },
	]);
	const [inputText, setInputText] = useState('');
	function handleChecked(index) {
		const changeCheckedList = [...todoList];
		changeCheckedList[index].checked = !changeCheckedList[index].checked;
		setTodoList(changeCheckedList);
	}
	function handleChangeInputText(e) {
		setInputText(e.target.value);
	}
	function handleUpdateTodoList() {
		const newTodoList = [...todoList, { text: inputText, checked: false }];
		setTodoList(newTodoList);
		setInputText('');
	}

	return (
		<div
			style={{
				width: '100vw',
				height: '100vw',
				backgroundColor: '#FFFF',
				color: '#000',
			}}>
			<div
				style={{
					margin: '4rem',
				}}>
				<div>
					<input
						style={{ marginBottom: '20px', marginRight: '20px' }}
						type="text"
						value={inputText}
						onChange={handleChangeInputText}
					/>
					<button onClick={handleUpdateTodoList}>新增</button>
				</div>
				<ul
					style={{
						display: 'flex',
						alignItem: 'center',
						flexDirection: 'column',
					}}>
					{todoList.map((item, index) => (
						<ListItem
							content={item.text}
							checked={item.checked}
							key={item.text}
							onChecked={() => handleChecked(index)}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

// export default App
