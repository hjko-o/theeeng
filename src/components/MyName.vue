<template>
  <div class="my-name">
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="col-12 col-lg">
          <h3></h3>
        </div>
        <div class="col-12 col-lg">
          <h3>is</h3>
        </div>
        <div class="col-12 col-lg">
          <h3>hyunju</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-name',
    data () {
      return {
        name: 'Ko Hyunju'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullheight {
  min-height: 100vh;
}
</style>
