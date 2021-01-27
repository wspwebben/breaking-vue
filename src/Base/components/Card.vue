<script>
import { Card as AntCard } from 'ant-design-vue';

export default {
  name: 'BaseCard',
  components: {
    AntCard
  },
}
</script>

<template>
  <AntCard v-bind="$attrs">
    <slot />
  </AntCard>
</template>
