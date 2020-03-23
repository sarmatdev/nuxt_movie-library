export default {
  computed: {
    backdrop() {
      if (!this.movie.backdrop_path) {
        return { backgroundImage: `url("/img/backdrop.svg")` };
      } else {
        return {
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.movie.backdrop_path})`
        };
      }
    }
  }
};
