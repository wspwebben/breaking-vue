<script>
import { List as AntList } from 'ant-design-vue';

const { Item: AntListItem } = AntList;

export default {
  name: 'BaseGrid',
  components: {
    AntList,
    AntListItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<template>
  <AntList :grid="{ gutter: 20, column: 4 }" :data-source="items">
    <template #renderItem="{ item }">
      <AntListItem>
        <slot :item="item" />
      </AntListItem>
    </template>
  </AntList>
</template>
