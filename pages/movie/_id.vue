<template>
  <div>
    <section
      class="movie-hero"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
      }"
    >
      <h1 class="movie-hero__title">{{ movie.title }}</h1>
      <!-- <Button :link="`https://www.imdb.com/title/${movie.imdb_id}`">IMDB </Button> -->
    </section>
    <section class="movie-description">
      <img
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        alt=""
        class="movie-description__poster"
      />
      <main class="movie-description__box">
        <h1 class="movie-description__title">Overview</h1>
        <p class="movie-description__overview">{{ movie.overview }}</p>

        <h1 class="movie-description__title">Genres</h1>
        <ul class="movie-description__list">
          <li
            class="movie-description__list-item"
            v-for="genre in movie.genres"
            :key="genre.id"
          >
            <Link>{{ genre.name }}</Link>
          </li>
        </ul>

        <!-- <h1 class="movie-description__title">Cast</h1>
        <ul class="movie-description__list">
          <li
            class="movie-description__list-item"
            v-for="actor in cast"
            :key="cast.cast_id"
          >
            <img
              :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`"
              alt=""
            />
            {{ actor.name }}
          </li>
        </ul> -->
      </main>
    </section>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Link from "@/components/Link";
export default {
  layout: "movie",
  async fetch({ store, params }) {
    await store.dispatch("getMovieDetails", params.id);
  },
  computed: {
    movie() {
      return this.$store.getters["movie"];
    },
    cast() {
      return this.$store.getters["cast"];
    }
  },
  components: {
    Button,
    Link
  }
};
</script>

<style lang="scss">
.movie-hero {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    width: 60rem;
    font-size: 5rem;
    word-wrap: break-word;
    color: var(--color-primary);
    word-wrap: break-word;
    text-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0rem 2rem 2rem #263238;
    text-transform: uppercase;
    letter-spacing: 1rem;
    transform: skewX(-10deg);
  }
}

.movie-description {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  color: var(--color-primary);

  &__poster {
    max-width: 40rem;
    border-radius: 1rem;
    margin: 3rem;
  }

  &__box {
    width: 80rem;
    height: 70rem;
    margin: 3rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__overview {
    font-size: 1.4rem;
  }

  &__list {
    display: flex;
    align-items: center;
  }

  &__list-item {
    padding-left: 1rem;
    list-style: none;
    font-size: 1.4rem;
  }
}
</style>
