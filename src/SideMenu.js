import './TagButton.css';
import TagButton from './TagButton';

export default function SideMenu() {
	return (
		<div
			style={{
				border: '4px teal solid',
			}}
		>
			<TagButton title={'جديدة'}>
				<div>
					<span>😊😊😊</span>
				</div>
			</TagButton>
			<TagButton title={'أخر المقالات'}>
				<div>
					<img
						width="100px"
						src="https://hips.hearstapps.com/hmg-prod/images/white-cat-breeds-kitten-in-grass-67bf648a54a3b.jpg?crop=1.00xw:0.752xh;0,0.147xh&resize=1200:*"
					/>
				</div>
			</TagButton>
			<TagButton title={'الأكثر قراءة'}>
				<h1>Click me</h1>
				<h1>👍</h1>
			</TagButton>
			<TagButton title={'مقالات مميزة'}></TagButton>
			<TagButton />
		</div>
	);
}
