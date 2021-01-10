<script setup>
import LayoutLogo from './Logo.vue';
import LayoutNavigation from './Navigation.vue';

</script>

<template>
  <header class="layout-header">
    <div class="layout-header__container container">
      <LayoutLogo class="layout-header__logo" />

      <LayoutNavigation class="layout-header__navigation" />
    </div>
  </header>
</template>

<style lang="scss">
.layout-header {
  background-color: rgba(#312, 0.2);
  padding: 10px 0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  &__logo {

  }

  &__navigation {
  }
}
</style>