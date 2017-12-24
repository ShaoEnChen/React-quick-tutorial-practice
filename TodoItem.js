const {
	InputField
} = window.App;

class TodoItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { editable: false };
		this.toggleEditMode = this.toggleEditMode.bind(this);
	}
	
	toggleEditMode() {
		this.setState(
			{ editable: !this.state.editable }
		);
	}
	
	renderEditMode() {
		return (
			<InputField
				autoFocus={true}
				placeholder={this.props.title}
				onBlur={this.toggleEditMode}
				onKeyDown={(e) => {
					if(e.keyCode === 27) {	// ESC
						e.preventDefault();
						this.toggleEditMode();
					}
				}} />
		);
	}
	
	renderViewMode() {
		const {
			title,
			isCompleted,
			onDelete
		} = this.props;
		
		return (
			<li>
				<input type="checkbox" checked={isCompleted} />
				<span onClick={this.toggleEditMode}>
					{title}
				</span>
				<button onClick={() => { onDelete && onDelete() }}>
					x
				</button>
			</li>
		);
	}
	
	render() {
		return( this.state.editable ?
				this.renderEditMode() :
				this.renderViewMode()
		);
	}
}

window.App.TodoItem = TodoItem;
