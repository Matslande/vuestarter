<template>
  <div class="wrapper">
    <div class="header">
        <h1>{{ tittel }}</h1>
    </div>
        <div class="panel" v-for="item in exampleItems">
        <h2>{{ item.title }}</h2>
        <p>{{ item.byline }}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
      tittel: 'Take som data and loop over it in a grid',
      exampleItems: [
        { title: 'First Title',
          byline: 'A bit longer text on this line',
        },
        { title: 'Second Title',
          byline: 'A bit longer text on this line',
        },
        { title: 'Third Title',
          byline: 'A bit longer text on this line',
        },
        { title: 'Fourth Title',
          byline: 'A bit longer text on this line',
        },
        { title: 'Fifth Title',
          byline: 'A bit longer text on this line',
        },
        { title: 'Sixth Title',
          byline: 'A bit longer text on this line',
        }
      ]
    }
}
}
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  margin: 0 20px;
 /* display: grid;*/
  grid-gap: 10px;
}


/* no grid support? */

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.wrapper {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}

.panel {
    background-color:#eeeeee;
    /* needed for the flex layout*/
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
}

.header,
.footer {
  margin-left: 5px;
  margin-right: 5px;
  flex: 0 1 100%;
  grid-column: 1 / -1;
}

.wrapper > * {
    padding: 20px;
    font-size: 150%;
    margin-bottom: 10px;
}


/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */

@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}
</style>
