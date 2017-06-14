<template>
  <div class="characters">
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="col-12 col-md">
          <div class="character">
            <div class="face">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
              <div class="nostril left"></div>
              <div class="nostril right"></div>
              <div class="mouse"></div>
            </div>
            <div class="bottom"></div>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="character">
            <div class="face">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
              <div class="nostril left"></div>
              <div class="nostril right"></div>
              <div class="mouse"></div>
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'characters'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullheight {
    min-height: 100vh;
  }

  .character {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: purple;
    border-bottom: 30px solid rgba(0, 0, 0, 0.1);
    transform-origin: center bottom;
    animation: moving 1s infinite;
    transition: top 0.1s ease-in;
  }

  @keyframes moving  {
    0% {
      transform:rotate(5deg);
    }

    50% {
      transform:rotate(-5deg);
    }

    100% {
      transform:rotate(5deg);
    }
  }

  .face:hover {
    top: -10px;
  }

  .bottom {
    content: '';
    position: absolute;
    z-index: -1;
    left: 20px;
    bottom: -10px;
    width: 160px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .eyes {
    position: absolute;
    top: 50px;
    width: 10px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }

  .eyes.left {
    left: 50px;
  }

  .eyes.right {
    right: 50px;
  }

  .nostril {
    position: absolute;
    top: 70px;
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
  }

  .nostril.left {
    left: 85px;
  }

  .nostril.right {
    right: 85px;
  }

  .mouse {
    position: absolute;
    top: 100px;
    left: calc(50% - 50px);
    width: 100px;
    height: 50px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background: black;
    animation: smile 0.6s infinite;
  }

  .mouse::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: black;
  }

  .mouse::before, .mouse::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: #fff;
  }

  .mouse::before {
    left: calc(50% - 10px);
  }

  .mouse::after {
    left: calc(50% + 5px);
  }

  @keyframes smile {
    0% {
      height: 50px;
    }

    50% {
      height: 30px;
    }

    100% {
      height: 50px;
    }
  }
</style>
