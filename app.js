const {
	TodoHeader,
	InputField,
	TodoList
} = window.App

class TodoApp extends React.Component {
	render() {
		const {
			appName,
			userName,
			todos
		} = this.props;

		return (
			<div>
				<TodoHeader appName={appName} userName={userName} todoCount={todos.length} />
				<InputField inputFieldPlaceholder="新增一些懶覺" />
				<TodoList todos={todos} />
			</div>
		);
	}
}

TodoApp.defaultProps = {
	appName: "待辦事項",
	userName: "訪客",
	todos: []
}

window.App.TodoApp = TodoApp;
