const {
	TodoHeader,
	InputField,
	TodoList
} = window.App;

const _deleteTodo = (todos, id) => {
	const index = todos.findIndex((todo) => todo.id === id);
	if(index !== -1) {
		todos.splice(index, 1);
	}
	return todos;
};

class TodoApp extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: [
				{
					id: 0,
					name: '幹1',
					isCompleted: true
				},
				{
					id: 1,
					name: '幹2',
					isCompleted: false
				}
			]
		};
	}
	
	render() {
		const {
			todos
		} = this.state;
		
		const {
			appName,
			userName
		} = this.props;

		return (
			<div>
				<TodoHeader
					appName={appName}
					userName={userName}
					todoCount={todos.filter((todo) => !todo.isCompleted).length} />
				<InputField placeholder="新增一些懶覺" />
				<TodoList
					todos={todos}
					onDeleteTodo={(id) => {
						this.setState({
							todos: _deleteTodo(todos, id)
						})
					}} />
			</div>
		);
	}
}

window.App.TodoApp = TodoApp;
