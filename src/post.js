export default function post() {
	return (
		<div
			style={{
				border: '4px teal solid',
				padding: '10px',
				margin: '25px',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h2>This is the post Title</h2>
			<hr
				style={{
					backgroundColor: 'grey',
				}}
			></hr>
			<p>This is the post body</p>
		</div>
	);
}
