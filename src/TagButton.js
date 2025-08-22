import './TagButton.css';

export default function TagButton({ title, children }) {
	return (
		<button className="TagButton">
			{title} {children}
		</button>
	);
}
