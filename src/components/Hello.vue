<template>
  <div class="hello">
    <hello-world></hello-world>
    <my-name></my-name>
    <characters></characters>
    <daily></daily>
    <daily-data></daily-data>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import MyName from './MyName'
import Characters from './Characters'
import Daily from './Daily'
import DailyData from './DailyData'

export default {
  components: {
    HelloWorld,
    MyName,
    Characters,
    Daily,
    DailyData
  },
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
