<template>
  <div class="hello">
    <hello-world></hello-world>
    <my-name></my-name>
    <characters></characters>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import MyName from './MyName'
import Characters from './Characters'

export default {
  components: {
    HelloWorld,
    MyName,
    Characters
  },
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
