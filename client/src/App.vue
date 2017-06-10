<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyContent from './components/MyContent';

export default {
  name: 'app',
  components: {
    MyHeader,
    MyContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
