<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      alt=""
      class="movie__img"
    />
    <h2 class="movie__title">{{ movie.title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  name: "MovieItem"
};
</script>

<style lang="scss">
.movie {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: transparent;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  color: var(--color-primary-light);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    color: var(--color-primary-lighter);

    &::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: #37474f;
    z-index: -99;
    box-shadow: 0rem 2rem 5rem #263238;
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &__img {
    height: 38rem;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0rem 1rem 2rem #263238;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: 300;
    padding: 1rem;
  }
}
</style>
