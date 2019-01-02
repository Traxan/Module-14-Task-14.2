var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'https://static.posters.cz/image/750webp/8691.webp'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowiadający historię króla sawanny',
		img: 'https://images-na.ssl-images-amazon.com/images/I/51wiXuONYmL.jpg'
	},
	{
		id: 3,
		title: 'Lord of the Rings',
		desc: 'Film o magicznym pierścieniu',
		img: 'https://imgc.allpostersimages.com/img/print/u-g-F4PYQQ0.jpg?w=292&h=450'
	},
	{
		id: 4,
		title: 'Interstellar',
		desc: 'Film o zagładzie ludzkości',
		img: 'https://images-na.ssl-images-amazon.com/images/I/516j7Sqay4L.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
	);
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));