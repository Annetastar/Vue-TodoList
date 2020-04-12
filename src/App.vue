<template>
  <div id="app">
    <h1 class='title'>Todo List</h1>
      <Todolist />
  </div>
</template>

<script>

import Todolist from './components/Todolist';

export default {
  name: 'App',
  components: {
    Todolist
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(122,58,207,1) 32%, rgba(86,103,221,1) 48%, rgba(0,212,255,1) 100%);
}
  .title {
    display: flex;
    justify-content: center;
    color: #000;

text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #30c4ff 0px 0px 20px, #30c4ff 0px 0px 30px, #30c4ff 0px 0px 40px, #30c4ff 0px 0px 50px, #30c4ff 0px 0px 75px;
  }
</style>
