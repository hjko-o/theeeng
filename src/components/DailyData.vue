<template>
  <div class="daily-data">
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="row col-12">
          <h1 class="col-12">일상 현주 제보내용</h1>
          <div class="col-4">
            제보1
          </div>
          <div class="col-4">
            제보2
          </div>
          <div class="col-4">
            제보3
          </div>
          <div class="col-4">
            제보1
          </div>
          <div class="col-4">
            제보2
          </div>
          <div class="col-4">
            제보3
          </div>
          <div class="col-4">
            제보1
          </div>
          <div class="col-4">
            제보2
          </div>
          <div class="col-4">
            제보3
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'daily-data'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullheight {
    min-height: 100vh;
  }

  .row:not(.fullheight) {
    max-width: 690px;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 50px;
  }

  .col-4 {
    position: relative;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    max-width: 200px;
    height: 200px;
    margin: 10px 10px;
    border: 2px solid darkgray;
    border-radius: 5px;
    cursor: pointer;
  }

  .col-4::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/like.png') no-repeat center;
    background-size: contain;
    opacity: 0;
  }

  .col-4:hover::before {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
</style>
