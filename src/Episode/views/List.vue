<script>
import { ref } from 'vue'; 

import BaseGrid from '/@/Base/components/Grid.vue';
import EpisodeCard from '/@/Episode/components/Card.vue';

import { getAllEpisodes } from '/@/Episode/api';

export default {
  name: 'ViewEpisodeList',
  components: {
    BaseGrid,
    EpisodeCard,
  },
  setup() {
    const episodes = ref([]);

    getAllEpisodes().then(list => {
      episodes.value = list;
    });

    return {
      episodes
    }
  }
}
</script>

<template>
  <div class="ViewEpisodeList container">
    <BaseGrid :items="episodes">
      <template #default="{ item: episode }">
        <EpisodeCard
          :id="episode.id"
          :title="episode.title"
          :characters="episode.characters"
        />
      </template>
    </BaseGrid>
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
