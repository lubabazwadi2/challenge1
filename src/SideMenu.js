import './TagButton.css';
import TagButton from './TagButton';

export default function SideMenu() {
	const tagButtons = [
		{
			id: 1,
			title: 'جديدة',
			children: (
				<div>
					<span>😊😊😊</span>
				</div>
			),
		},
		{
			id: 2,
			title: 'أخر المقالات',
			children: (
				<div>
					<img
						width="100px"
						src="https://hips.hearstapps.com/hmg-prod/images/white-cat-breeds-kitten-in-grass-67bf648a54a3b.jpg?crop=1.00xw:0.752xh;0,0.147xh&resize=1200:*"
						alt="cat"
					/>
				</div>
			),
		},
		{
			id: 3,
			title: 'الأكثر قراءة',
			children: (
				<>
					<h1>Click me</h1>
					<h1>👍</h1>
				</>
			),
		},
		{
			id: 4,
			title: 'مقالات مميزة',
		},
	];

	const tagButtonsList = tagButtons.map((tagButton) => {
		return (
			<TagButton key={tagButton.id} title={tagButton.title}>
				{tagButton.children}
			</TagButton>
		);
	});

	return (
		<div style={{ border: '4px teal solid' }}>
			{tagButtonsList}
			<TagButton />
		</div>
	);
}
