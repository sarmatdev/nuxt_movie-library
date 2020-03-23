<template>
  <div>
    <MoviesList />
    <!-- <Pagination /> -->
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import Pagination from "@/components/Pagination";
export default {
  async fetch({ store }) {
    await store.dispatch("getMovies");
  },
  components: {
    MoviesList,
    Pagination
  }
};
</script>

<style></style>
