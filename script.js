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

var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired
},
  render: function() {
      return (
        React.createElement('li', {key: movies.id},
          React.createElement(MovieTitle, {title: this.props.title}),
          React.createElement(MovieDesc, {desc: this.props.desc}),
          React.createElement(MovieImg, {img: this.props.img})
      )
    )
  },
});

MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function () {
      var moviesElements = movies.map((movie, id) => (
          React.createElement(Movie, {key: id, title: movie.title, desc: movie.desc, img: movie.img}
	  )	
   )
);
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
      )
    );
  }
})

MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  }
})

MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('p', {}, 'Opis: ', this.props.desc)
    )
  }
})

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('img', {src: this.props.img})
        );
    }
});

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));