<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyContent from './components/MyContent';
import MyFooter from './components/MyFooter';

export default {
  name: 'app',
  components: {
    MyHeader,
    MyContent,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: "ProximaNova-Light","open-sans","Calibri",Helvetica,sans-serif;
  color: #2c3e50;
}
</style>
