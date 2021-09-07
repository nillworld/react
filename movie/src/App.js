import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//App 컨포넌트에는 state가 필요하기에 function이 아닌 class로 컨포넌트를 만듬
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //const movies = awit axios.get('url~~')
    //movies.data.data.movies 대신es6문법 이용
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    //{movies:movies, isLoading: false}에서 하나는 state에서 나머지 하나는  axious에서온것
    //이름이 같다면 축약 가능
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    //이렇게 하지 않으면 밑에 this.state.movies.map으로 써야함
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
