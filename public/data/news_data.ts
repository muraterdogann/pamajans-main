type NewsDataType={
    id:string,
    text:string,
    title:string,
    image:string,
    date:string,
    time:string
}

const news_data = [
	{
		id: '1',
		text: 'Lorem',
		title: 'Saygı Butik',
		image: '/images/blog/post_1.jpg',
		date: '5 Feb',
		time: '3 min read',
	},
	{
		id: '2',
		text: 'lorem',
		title: 'Karum Rouge',
		image: '/images/blog/post_2.jpg',
		date: '5 Feb',
		time: '3 min read',
	},
	{
		id: '3',
		text: 'Lorem',
		title: 'Dünya Göz Optik',
		image: '/images/blog/post_3.jpg',
		date: '22 Feb',
		time: '3 min read',
	},
	{
		id: '4',
		text: 'Lorem',
		title: 'GymXPro',
		image: '/images/blog/post_4.jpg',
		date: '18 Jan',
		time: '3 min read',
	},
	{
		id: "5",
		text: 'Lorem',
		title: "lorem",
		image: '/images/blog/post_5.jpg',
		date: '15 Jan',
		time: '3 min read',
	},
	{
		id: "6",
		text: 'Lorem',
		title: "lorem",
		image: '/images/blog/post_6.jpg',
		date: '23 Dec',
		time: '3 min read',
	},
	
];

const single_news_data = [
	{
		id: 'post_1',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_1.jpg',
		date: '5 Feb',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_2',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_2.jpg',
		date: '5 Feb',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_3',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'List your collection for secondary sales',
		image: '/images/blog/post_3.jpg',
		date: '22 Feb',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_4',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'The biggest moves in NFTs, Bitcoin, crypto rules',
		image: '/images/blog/post_4.jpg',
		date: '18 Jan',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_5',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Incredible Amount of Developer Energy' in Web3",
		image: '/images/blog/post_5.jpg',
		date: '15 Jan',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_6',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Inflation is up, it matters: High prices plague Biden's",
		image: '/images/blog/post_6.jpg',
		date: '23 Dec',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
];

export { news_data, single_news_data };
