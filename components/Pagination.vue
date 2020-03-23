<template>
  <section class="pagination">
    <button
      class="btn pagination__item"
      v-if="currentPage >= 2"
      @click="loadPage('previous')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      Page
    </button>
    {{ currentPage }}
    <button class="btn pagination__item" @click="loadPage('next')">
      Page
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageOnLoad: 1,
      currentPage: 1
    };
  },
  methods: {
    async loadPage(direction) {
      if (direction === "next") {
        this.pageOnLoad++;
        this.currentPage = this.pageOnLoad;
        await this.$store.dispatch("getMovies", this.pageOnLoad);
      } else if (direction === "previous") {
        this.pageOnLoad--;
        this.currentPage = this.pageOnLoad;
        await this.$store.dispatch("getMovies", this.pageOnLoad);
      }
    }
  }
};
</script>

<style lang="scss">
.pagination {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &__item {
  }
}
</style>
