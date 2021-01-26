<script>
import { Layout as AntLayout } from 'ant-design-vue';
const AntHeader = AntLayout.Header;

export default {
  name: 'LayoutHeader',
  components: {
    AntHeader
  },
}
</script>

<template>
  <AntHeader><slot /></AntHeader>
</template>
