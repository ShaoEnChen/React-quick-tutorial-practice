const { TodoItem } = window.App;

class TodoList extends React.Component {
	render() {
		const todoItems = this.props.todos
			.map(
				(item, index) =>
					<TodoItem key={index}
							  title={item.name}
							  isCompleted={item.isCompleted} />
			);

		return (
			<ul>
				{todoItems}
			</ul>
		);
	}
}

window.App.TodoList = TodoList;
