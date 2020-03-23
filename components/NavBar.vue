<template>
  <header class="navbar">
    <h1 class="navbar__title">Movie Library</h1>
    <form class="navbar__search">
      <input
        type="text"
        class="navbar__input"
        v-model="query"
        placeholder="Search..."
      />
      <button class="navbar__button" @click.prevent="click">
        <font-awesome-icon
          :style="{ color: 'white' }"
          :icon="['fas', 'search']"
          size="lg"
        />
      </button>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    click() {
      if (!this.query) {
        return;
      } else {
        this.$router.push(`/search/${this.query}`);
        this.query = "";
      }
    }
  }
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-primary);
  box-shadow: 0rem 2rem 5rem #263238;
  padding-left: 1rem;
  padding-right: 1rem;

  &__title {
    color: var(--text-color);
    font-weight: 300;
  }

  &__search {
    display: flex;
    align-items: center;
  }

  &__input {
    width: 20rem;
    height: 4rem;
    border-radius: 5rem;
    font-size: 2rem;
    border: none;
    outline: none;
    padding: 1rem 2rem;
  }

  &__button {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: var(--color-primary-dark);
    outline: none;
    border: none;
    transform: translateX(-4rem);
    cursor: pointer;
  }
}
</style>
