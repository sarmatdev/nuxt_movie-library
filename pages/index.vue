<template>
  <div class="container">
    <MoviesList />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
export default {
  async fetch({ store }) {
    await store.dispatch("getMovies");
  },
  components: {
    MoviesList
  }
};
</script>

<style></style>
