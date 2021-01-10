<script>
export default {
  name: 'LayoutLogo',
}
</script>

<template>
  <router-link class="layout-logo" to="/">
    <img class="layout-logo__image" src="../assets/image/logo.png" alt="Breaking Bad page" width="50" height="27" >
  </router-link>
</template>

<style lang="scss">
.layout-logo {

  &__image {
    border-radius: 15px;
  }
}
</style>