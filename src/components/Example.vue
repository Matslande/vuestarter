<template>
<div>
<p>{{ message }} component!</p>
<importComponent />

</div>
</template>

<script>
import importComponent from './importComponent.vue'

export default {
  data () {
    return {
      message: 'I am this'
    }
  },
  components: {
    importComponent
  }
}
</script>

<style scoped>
p{
  font-size: 2rem;
}
</style>
