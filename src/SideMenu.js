import './TagButton.css';

export default function SideMenu() {
	return (
		<div
			style={{
				border: '4px teal solid',
				padding: '10px',
				margin: '25px',
				alignItems: 'center',
			}}
		>
			<button className="TagButton">Tag Button</button>
			<button className="TagButton">Tag Button</button>
			<button className="TagButton">Tag Button</button>
			<button className="TagButton">Tag Button</button>
			<button className="TagButton">Tag Button</button>
			<button className="TagButton">Tag Button</button>
			<button className="TagButton">Tag Button</button>
		</div>
	);
}
