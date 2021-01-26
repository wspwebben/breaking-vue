<script>
import { Layout as AntLayout } from 'ant-design-vue';
const AntFooter = AntLayout.Footer;

export default {
  name: 'LayoutFooter',
  components: {
    AntFooter
  },
}
</script>

<template>
  <AntFooter><slot /></AntFooter>
</template>
