<script>
import { ref, computed } from 'vue'; 

import EpisodeSeriesList from '/@/Episode/components/SeriesList.vue';

import { getAllEpisodes } from '/@/Episode/api';

import { groupBy } from '/@/helpers';

const makeSeriesTitle = ({ season, series}) => `${series} season ${season}`;

export default {
  name: 'ViewEpisodeList',
  components: {
    EpisodeSeriesList,
  },
  setup() {
    const episodes = ref([]);

    const episodesBySeries = computed(() => {
      return groupBy(episodes.value, makeSeriesTitle)
    });

    getAllEpisodes().then(list => {
      episodes.value = list;
    });

    return {
      episodesBySeries,
    }
  }
}
</script>

<template>
  <div class="ViewEpisodeList container">
    <EpisodeSeriesList
      v-for="(episodes, title) in episodesBySeries"
      :key="title"
      :title="title"
      :episodes="episodes"
    />
  </div>
</template>

<style lang="scss">
.ViewEpisodeList {
  padding-top: 20px;

  &__list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
