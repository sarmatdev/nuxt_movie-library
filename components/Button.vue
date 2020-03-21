<template>
  <nuxt-link class="btn__link" to="/">
    <button class="btn">
      <slot></slot>
      <font-awesome-icon class="btn__icon" :icon="['fab', 'imdb']" />
    </button>
  </nuxt-link>
</template>

<script>
export default {
  props: ["link"]
};
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 1rem 2rem;
  line-height: 1;
  font-weight: 500;
  // font-size: 1.3rem;
  width: auto;
  background-color: var(--text-color);
  border: 1px solid var(--color-primary);
  border-radius: 5rem;
  transition: all 0.1s ease-in;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  &__link {
    text-decoration: none;
    color: var(--color-primary);
  }

  &__icon {
    padding-left: 1rem;
    // font-size: 3rem;
  }
}
</style>
