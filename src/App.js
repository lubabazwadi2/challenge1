import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

export default function App() {
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
					{/* POSTS */}
					<div
						style={{
							width: '70%', // reusable
						}}
					>
						<Post
							title={'أكاديمية ترميز'}
							body={'أكاديمية مخصصة لتعلم البرمجة بمختلف لغاتها وتقنياتها'}
						>
							<h2>20</h2>
						</Post>
						<Post
							title={'hello world'}
							body={'this is the hello world article'}
						/>
						<Post title={'Post 3'} body={'this is the body of post 3'} />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
					{/* Side Menu */}
					<div style={{ width: '30%', marginTop: '25px' }}>
						<SideMenu />
					</div>
				</div>
			</div>
		</div>
	);
}
