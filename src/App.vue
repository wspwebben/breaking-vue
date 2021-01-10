<script lang="ts">
import { defineComponent } from 'vue';

import LayoutStructure from './Layout/Structure.vue';

export default defineComponent({
  name: 'App',
  components: {
    LayoutStructure,
  }
})
</script>

<template>
  <LayoutStructure>
    <router-view />
  </LayoutStructure>
</template>

<style>
#app {
  height: 100%;
}
</style>