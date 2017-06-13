<template>
  <div class="hello">
    <hello-world></hello-world>
    <my-name></my-name>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import MyName from './MyName'

export default {
  components: {
    HelloWorld,
    MyName
  },
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
