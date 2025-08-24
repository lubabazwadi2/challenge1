import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

export default function App() {
	const posts = [
		{
			id: 1,
			title: 'أكاديمية ترميز',
			body: 'أكاديمية مخصصة لتعلم البرمجة بمختلف لغاتها وتقنياتها',
			children: <h2>20</h2>,
		},
		{
			id: 2,
			title: 'hello world',
			body: 'this is the hello world article',
		},
		{
			id: 3,
			title: 'Post 3',
			body: 'this is the body of post 3',
		},
	];

	const postsList = posts.map((post) => {
		return (
			<Post key={post.id} title={post.title} body={post.body}>
				{post.children}
			</Post>
		);
	});

	return (
		<div className="App">
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{/* POSTS + SIDE MENU */}
				<div
					style={{ width: '60%', display: 'flex', justifyContent: 'center' }}
				>
					{/* POSTS CONTAINER*/}
					<div style={{ width: '70%' }}>{postsList}</div>
					{/* Side Menu */}
					<div style={{ width: '30%', marginTop: '25px' }}>
						<SideMenu />
					</div>
				</div>
			</div>
		</div>
	);
}
