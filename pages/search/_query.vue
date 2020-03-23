<template>
  <MoviesList />
</template>

<script>
import MoviesList from "@/components/MoviesList";

export default {
  async fetch({ store, route }) {
    await store.dispatch("searchMovie", route.params.query);
  },
  components: {
    MoviesList
  }
};
</script>

<style></style>
