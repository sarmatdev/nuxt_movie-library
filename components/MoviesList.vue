<template>
  <section class="movies-container">
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </section>
</template>

<script>
import MovieItem from "@/components/MovieItem";
export default {
  computed: {
    movies() {
      return this.$store.getters["movies"];
    }
  },
  components: {
    MovieItem
  },
  name: "MoviesList"
};
</script>

<style lang="scss">
.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  padding: 4rem 0;
  grid-gap: 4rem 2rem;
}
</style>
