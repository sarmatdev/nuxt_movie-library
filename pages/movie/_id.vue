<template>
  <div>
    <section class="movie-hero" :style="backdrop">
      <h1 class="movie-hero__title">{{ movie.title }}</h1>
    </section>
    <section class="movie-description">
      <img :src="poster" alt="" class="movie-description__poster" />
      <main class="movie-description__section">
        <div class="section">
          <h1 class="section__title">Overview</h1>
          <p class="section__overview">{{ movie.overview }}</p>
        </div>
        <div class="section">
          <h1 class="section__title">Genres</h1>
          <ul class="section__list">
            <li
              class="section__list-item"
              v-for="genre in movie.genres"
              :key="genre.id"
            >
              {{ genre.name }}
            </li>
          </ul>
        </div>

        <h1 class="section__title">Cast</h1>
        <ul class="section__list">
          <li
            class="section__list-item"
            v-for="actor in cast"
            :key="cast.cast_id"
          >
            <img
              :src="`https://image.tmdb.org/t/p/w400${actor.profile_path}`"
              alt=""
              class="section__list-img"
            />
            {{ actor.name }}
          </li>
        </ul>
      </main>
    </section>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Link from "@/components/Link";
import posterMixin from "@/plugins/mixins/posterMixin";
import backdropMixin from "@/plugins/mixins/backdropMixin";
export default {
  layout: "movie",
  mixins: [posterMixin, backdropMixin],
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
  background-color: var(--color-primary-dark);

  &__title {
    width: 60rem;
    font-size: 5rem;
    word-wrap: break-word;
    color: var(--color-primary);
    word-wrap: break-word;
    text-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0rem 2rem 2rem var(--color-primary-darker);
    text-transform: uppercase;
    letter-spacing: 1rem;
    transform: skewX(-10deg);
  }
}

.movie-description {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  color: var(--color-primary);

  &__poster {
    max-width: 40rem;
    height: 60rem;
    width: 50vw;
    border-radius: 1rem;
  }

  &__section {
    width: 50rem;

    .section {
      &__title {
        padding-top: 2rem;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 2px solid var(--color-primary);
      }

      &__overview {
        padding-top: 1rem;
        font-size: 1.4rem;
      }

      &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      &__list-item {
        padding: 1rem;
        list-style: none;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__list-img {
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
