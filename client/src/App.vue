<template>
  <div id="app">
    <MyHeader></MyHeader>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';

export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
