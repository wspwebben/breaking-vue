<script>
import CharacterCard from '/@/Character/components/Card.vue';
import BaseGrid from '/@/Base/components/Grid.vue';

import { getCharacterByName } from '/@/Character/api';

export default {
  name: 'EpisodePage',
  components: {
    CharacterCard,
    BaseGrid,
  },
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
      default: '',
    },
    series: {
      type: String,
      default: '',
    },

    characters: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      charactersList: [],
    }
  },
  async created() {
    this.charactersList = await Promise.all(
      this.characters.map(character => {
        return getCharacterByName(character)
      })
    );
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <span>{{ series }}</span>

    <BaseGrid :items="charactersList">
      <template #default="{ item: character }">
        <CharacterCard v-bind="character"
        />
      </template>
    </BaseGrid>
  </div>
</template>

<style>

</style>