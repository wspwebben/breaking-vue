<script>
import BaseCard from '/@/Base/components/Card.vue';

import { EPISODE } from '/@/Episode/routes';

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
    },
    toEpisodePage() {
      return {
        name: EPISODE,
        params: {
          id: this.id,
        }
      }
    }
  }
}
</script>

<template>
  <BaseCard class="EpisodeCard">
    <h3 class="EpisodeCard__title">
      <RouterLink class="EpisodeCard__title-link" :to="toEpisodePage">
        {{ title }}
      </RouterLink>
    </h3>

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

  &__title-link {

    &:hover {
      color: colors.$primary;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }  
  }

  &__date {
    display: block;
    margin: 0;
    text-align: left;
  }
}
</style>