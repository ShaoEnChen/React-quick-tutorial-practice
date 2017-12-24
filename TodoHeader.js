class TodoHeader extends React.Component {
	render() {
		const {
			appName,
			userName,
			todoCount
		} = this.props;

		return (
			<div>
				<h3>
					{appName}
				</h3>
				<p>
					哈囉{userName}，你有 {todoCount} 件未完成的待辦事項
				</p>
			</div>
		);
	}
}

TodoHeader.defaultProps = {
  appName: '待辦清單',
  userName: '訪客',
  todoCount: 0
};

window.App.TodoHeader = TodoHeader;
