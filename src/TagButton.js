import './TagButton.css';

export default function TagButton({ title, children }) {
	return title == null ? (
		<button className="TagButton">
			{title} {children}
		</button>
	) : null;
}
