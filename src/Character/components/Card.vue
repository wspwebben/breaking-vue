<script>
import BaseCard from '/@/Base/components/Card.vue';

import { UNKNOWN } from '/@/Character/status';

export default {
  name: 'CharacterCard',
  components: {
    BaseCard
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: UNKNOWN,
    },
    photo: {
      type: String,
      default: '',
    },
    occupation: {
      type: Array,
      default: () => []
    },
    portrayed: {
      type: String,
      default: '',
    },
  }
}
</script>

<template>
  <BaseCard>
    <h3>{{ name }}</h3>
    <span>{{ nickname }}</span>
    <img v-if="photo" :src="photo" alt="Character's photo" />
    <b>{{ status }}</b>
    
  </BaseCard>
</template>

<style>

</style>