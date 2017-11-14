<template>
  <nav>
    <div class="item">
        <router-link to="/">{{ sitetitle }}</router-link>
    </div>
    <div class="item">
        <router-link to="/about">About</router-link>
    </div>
    <div class="item">
        <router-link to="/list">List</router-link>
    </div>
    <div class="item">
        <router-link to="/example">Component</router-link>
    </div>
    <div class="item">
        <router-link to="/grid">Grid</router-link>
    </div>
  </nav>
</template>

<script>
module.exports = {
  data () {
    return {
      sitetitle: 'Vue Starter'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
