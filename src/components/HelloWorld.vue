<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ byline }}</p>
    <importComponent />
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is the front page. Above is the menu with some example content.',
      byline: 'This starter uses scss and has vue router and it has the Netlife font as an example imported font.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
