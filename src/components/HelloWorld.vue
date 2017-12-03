<template>
  <div class="hello-world">
    <div class="container">
      <div class="row align-items-center fullheight bubble-bg">
        <div class="col">
          <h1>Hello world</h1>
        </div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello-world'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello-world {
    background: #f0ffff;
  }

  .fullheight {
    min-height: 100vh;
  }

  .bubble-bg {
    position: relative;
    overflow: hidden;
  }

  .bubble {
    position: absolute;
    bottom: -50px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #000000;
  }

  .bubble:nth-of-type(1) {
    left: 10px;
    animation: bubble 10s 2s linear infinite;
  }

  .bubble:nth-of-type(2) {
    left: 50%;
    animation: bubble 10s linear infinite;
  }

  .bubble:nth-of-type(3) {
    left: 100px;
    animation: bubble 8s linear infinite;
  }

  .bubble:nth-of-type(4) {
    right: 100px;
    animation: bubble 5s linear infinite;
  }

  .bubble:nth-of-type(5) {
    right: 10px;
    animation: bubble 15s linear infinite;
  }

  @keyframes bubble {
    0% {
      bottom: -100px;
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      bottom: 100%;
      opacity: 0;
    }
  }

  h1 {
    margin-bottom: 50px;
    font-size: 45pt;
    font-weight: 600;
    letter-spacing: 15px;
    color: #333;
    text-align: center;
  }
</style>
