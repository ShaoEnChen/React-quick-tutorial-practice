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
		this.setState({ editable: !this.state.editable });
	}
	
	renderEditMode() {
		return (
			<InputField
				autoFocus={true}
				inputFieldPlaceholder={this.props.title}
				onBlur={this.toggleEditMode}
				onKeyDown={(e) => {
					if(e.keyCode === 27) {
						e.preventDefault();
						this.toggleEditMode();
					}
				}} />
		);
	}
	
	renderViewMode() {
		const {
			title,
			isCompleted
		} = this.props;
		
		return (
			<li>
				<input type="checkbox" checked={isCompleted} />
				<span onClick={this.toggleEditMode}>
					{title}
				</span>
				<button>
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
