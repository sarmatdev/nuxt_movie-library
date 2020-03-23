export default {
  computed: {
    poster() {
      if (!this.movie.poster_path) {
        return "/img/poster.svg";
      } else {
        return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
      }
    }
  }
};
