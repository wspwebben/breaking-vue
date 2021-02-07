<script>
import EpisodePage from '/@/Episode/components/Page.vue';

import { getEpisode } from '/@/Episode/api';

export default {
  name: 'ViewEpisode',
  components: {
    EpisodePage
  },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      episode: null,
    }
  },
  async created() {
    this.episode = await getEpisode(this.id);
  }
}
</script>

<template>
  <EpisodePage class="ViewEpisode" v-if="episode" v-bind="episode" />
</template>

<style lang="scss">
.ViewEpisode {
  padding-top: 20px;
}
</style>
