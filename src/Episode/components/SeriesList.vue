<script>
import EpisodeCard from '/@/Episode/components/Card.vue';
import BaseGrid from '/@/Base/components/Grid.vue';

export default {
  name: 'EpisodeSeriesList',
  components: {
    BaseGrid,
    EpisodeCard,
  },
  props: {
    episodes: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  }
}
</script>

<template>
  <h2>{{ title }}</h2>
  <BaseGrid :items="episodes">
    <template #default="{ item: episode }">
      <EpisodeCard
        :id="episode.id"
        :title="episode.title"
        :characters="episode.characters"
      />
    </template>
  </BaseGrid>
</template>

<style>

</style>