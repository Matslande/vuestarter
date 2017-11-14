<template>
  <div id="app">
  <Menu />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>


<style lang="scss">
@import 'assets/styles/main.scss';
</style>
