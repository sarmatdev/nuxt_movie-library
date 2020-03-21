<template>
  <nuxt-link class="link" to="/">
    <font-awesome-icon :icon="['fas', 'dot-circle']" />
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: var(--color-primary-dark);
  transition: all 0.2s ease;
  display: block;

  &:visited {
    color: var(--color-primary-dark);
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
}
</style>
