class InputField extends React.Component {
	render() {
		return (
			<input type="text" {...this.props} />
		);
	}
}

InputField.defaultProps = {
	inputFieldPlaceholder: "新增待辦事項"
}

window.App.InputField = InputField;
