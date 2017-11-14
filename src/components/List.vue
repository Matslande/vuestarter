<template>
<div class="list">
<h1>LIST</h1>
<hr>
<ul>
  <li v-for="msg in messages">{{ msg }}</li>
</ul>
<hr>
<ul>
  <li v-for="item in objectItems">{{ item }}</li>
</ul>

<hr>
<ul>
<li v-for="n in evenNumbers">{{ n }}</li>
</ul>

</div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      messages: [ 'item 1', 'item 2', 'item 3' ],
      numbers: [ 1, 2, 3, 4, 5 ],
      objectItems: {
        key1: 'item1',
        key2: 'item2',
        key3: 'item3'
      }
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list{

}
</style>