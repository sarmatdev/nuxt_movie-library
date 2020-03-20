export const state = () => {
  movies: [];
};
export const mutations = {
  setMovies(state, movies) {
    state.movies = movies;
  }
};
export const actions = {
  async getMovies({ commit }) {
    const { data } = await this.$axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
    );
    commit("setMovies", data.results);
  }
};
export const getters = {
  movies(state) {
    return state.movies;
  }
};
