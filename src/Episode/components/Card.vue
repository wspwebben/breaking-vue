<script>
import BaseCard from '/@/Base/components/Card.vue';

import { formatDateString } from '/@/service/date';

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
    date: {
      type: String,
      default: '',
    }
  },
  computed: {
    formatedDate() {
      return formatDateString(this.date, 'MM-dd-yyyy');
    }
  }
}
</script>

<template>
  <BaseCard class="EpisodeCard">
    <h3 class="EpisodeCard__title">{{ title }}</h3>

    <ul class="EpisodeCard__character-list">
      <li class="EpisodeCard__character" v-for="character in characters" :key="character">{{ character }}</li>
    </ul>

    <p class="EpisodeCard__date">
      Air date: <time>{{ formatedDate }}</time>
    </p>
  </BaseCard>
</template>

<style lang="scss">
@use '../../assets/style/colors';

.EpisodeCard {
  position: relative;

  &__date {
    display: block;
    margin: 0;
    text-align: left;
  }
}
</style>