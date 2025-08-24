import './TagButton.css';

export default function TagButton({ title, children }) {
	return title == null ? null : (
		<button className="TagButton">
			{title} {children}
		</button>
	);
}
