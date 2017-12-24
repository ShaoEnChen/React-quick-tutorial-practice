const { TodoItem } = window.App;

class TodoList extends React.Component {
	render() {
		const {
			todos,
			onDeleteTodo
		} = this.props;
		const todoItems = todos.map(
			(todo) => <TodoItem
						key={todo.id}
						title={todo.name}
						isCompleted={todo.isCompleted}
						onDelete={() => {
							onDeleteTodo && onDeleteTodo(todo.id)
						}} />
		);

		return (
			<ul>
				{todoItems}
			</ul>
		);
	}
}

window.App.TodoList = TodoList;
