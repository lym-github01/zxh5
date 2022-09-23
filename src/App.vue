<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './views/index'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
html { overflow-x:hidden; }
* {
  padding: 0;
  margin: 0;
}
body{
  background-color: #FFF;
}
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: white;

  border-radius: 2px;
}

body::-webkit-scrollbar-thumb {
  background: blueviolet;

  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: white;
}

body::-webkit-scrollbar-corner {
  background: blueviolet;
}
</style>
