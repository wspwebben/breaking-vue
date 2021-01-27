<script>
import BaseCard from '/@/Base/components/Card.vue';

export default {
  name: 'EpisodeCard',
  components: {
    BaseCard
  },
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
      required: true
    },
    characters: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<template>
  <BaseCard class="EpisodeCard">
    <h3 class="EpisodeCard__title">{{ title }}</h3>

    <ul class="EpisodeCard__character-list">
      <li class="EpisodeCard__character" v-for="character in characters" :key="character">{{ character }}</li>
    </ul>
  </BaseCard>
</template>

<style lang="scss">
.EpisodeCard {

  &__character-list {
  }
}
</style>