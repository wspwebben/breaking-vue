<script>
export default {
  name: 'LayoutNavigation',
}
</script>

<template>
  <nav class="layout-navigation">
    <ul class="layout-navigation__list">
      <li class="layout-navigation__item">
        <router-link class="layout-navigation__link" to="/about">About</router-link>
      </li>
      <li class="layout-navigation__item">
        <router-link class="layout-navigation__link" to="/services">Services</router-link>
      </li>
      <li class="layout-navigation__item">
        <router-link class="layout-navigation__link" to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.layout-navigation {

  &__list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__link {
    padding: 0 5px;
  }
}
</style>