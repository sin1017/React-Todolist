export function ListItem(props) {
	const { content = '', checked = false, onChecked } = props;
	return (
		<li
			style={{
				display: 'flex',
				textDecoration: checked && 'line-through',
			}}>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChecked}
			/>
			<p
				style={{
					marginLeft: '10px',
				}}>
				{content}
			</p>
		</li>
	);
}
