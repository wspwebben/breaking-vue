<script>
import { Layout as AntLayout } from 'ant-design-vue';

export default {
  name: 'LayoutContainer',
  components: {
    AntLayout
  },
}
</script>

<template>
  <AntLayout class="layout-container"><slot /></AntLayout>
</template>

<style lang="scss">
.layout-container {
  height: 100%;
}
</style>
