<template>
  <div class="hello">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  components: {
    HelloWorld
  },
  name: 'Hello',
  created: function () {
    console.log("created Hello DOM")
  },
  mounted: function () {
    console.log("mounted Hello DOM")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
