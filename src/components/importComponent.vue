<template>
<div>

<p>{{ message }} component!</p>
</div>
</template>

<script>
module.exports = {
  name: 'importComponent',
  data: function () {
    return {
      message: '👉 I am a imported'
    }
  }
}
</script>

<style scoped>
p{
  color:green;
  font-size: 2.5rem;
}
</style>
