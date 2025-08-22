import Header from './header';
import Post from './post';
import SideMenu from './SideMenu';

export default function App() {
	return (
		<div>
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{/* POSTS + SIDE MENU */}
				<div
					style={{
						display: 'flex',
						width: '60%',
					}}
				>
					{/* POSTS */}
					<div
						style={{
							width: '70%', // reusable
						}}
					>
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
					{/* Side Menu */}
					<div
						style={{
							width: '40%', // reusable
						}}
					>
						<SideMenu />
					</div>
				</div>
			</div>
		</div>
	);
}
