<script>
import { Layout as AntLayout } from 'ant-design-vue';
const AntContent = AntLayout.Content;

export default {
  name: 'LayoutContainer',
  components: {
    AntContent
  },
}
</script>

<template>
  <AntContent><slot /></AntContent>
</template>
