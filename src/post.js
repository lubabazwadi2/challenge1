export default function Post({
	title = 'no title',
	body = 'no body',
	children,
}) {
	return (
		<div
			style={{
				border: '4px teal solid',
				padding: '10px',
				margin: '25px',
			}}
		>
			{children}
			<h2>{title}</h2>
			<hr />
			<p>{body}</p>
		</div>
	);
}
