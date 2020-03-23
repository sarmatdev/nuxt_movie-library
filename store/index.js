export const state = () => {
  movies: [];
  movie: [];
  cast: [];
};
export const mutations = {
  setMoviesList(state, movies) {
    state.movies = movies;
  },
  setMovie(state, movie) {
    state.movie = movie;
  },
  setCast(state, cast) {
    state.cast = cast;
  }
};
export const actions = {
  async getMovies({ commit }, page = 1) {
    const { data } = await this.$axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${page}`
    );
    commit("setMoviesList", data.results);
  },
  async getMovieDetails({ commit }, id) {
    const { data } = await this.$axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    const cast = await this.$axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`
    );
    commit("setMovie", data);
    commit("setCast", cast.data.cast);
  },
  async searchMovie({ commit }, name) {
    const { data } = await this.$axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${name}`
    );
    commit("setMoviesList", data.results);
  }
};
export const getters = {
  movies(state) {
    return state.movies;
  },
  movie(state) {
    return state.movie;
  },
  cast(state) {
    return state.cast;
  }
};
