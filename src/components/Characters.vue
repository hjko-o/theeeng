<template>
  <div class="characters">
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="col-12 col-md">
          <div class="character">
            <div class="face daily">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
              <div class="nostril left"></div>
              <div class="nostril right"></div>
              <div class="mouse"></div>
            </div>
            <div class="bottom"></div>
          </div>
          <h3>일상 현주 더보기</h3>
        </div>
        <div class="col-12 col-md">
          <div class="character">
            <div class="face professionally">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
              <div class="cheek left"></div>
              <div class="cheek right"></div>
              <div class="mouse"></div>
            </div>
            <div class="bottom"></div>
          </div>
          <h3>직장인 현주 더보기</h3>
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
  .characters {
    background-color: lavender;
  }

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
    z-index: 9;
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
    z-index: 0;
    left: 20px;
    bottom: -10px;
    width: 160px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .face.daily {
    background-color: deeppink;
  }

  .daily .eyes {
    position: absolute;
    top: 50px;
    width: 13px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }

  .daily .eyes.left {
    left: 50px;
  }

  .daily .eyes.right {
    right: 50px;
  }

  .daily .nostril {
    position: absolute;
    top: 70px;
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
  }

  .daily .nostril.left {
    left: 85px;
  }

  .daily .nostril.right {
    right: 85px;
  }

  .daily .mouse {
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

  .daily .mouse::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: black;
  }

  .daily .mouse::before, .daily .mouse::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: #fff;
  }

  .daily .mouse::before {
    left: calc(50% - 10px);
  }

  .daily .mouse::after {
    left: calc(50% + 5px);
  }
  .daily .eyes {
    position: absolute;
    top: 50px;
    width: 15px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }

  .daily .eyes.left {
    left: 50px;
  }

  .daily .eyes.right {
    right: 50px;
  }

  .daily .nostril {
    position: absolute;
    top: 70px;
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
  }

  .daily .nostril.left {
    left: 85px;
  }

  .daily .nostril.right {
    right: 85px;
  }

  .daily .mouse {
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

  .daily .mouse::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: black;
  }

  .daily .mouse::before, .daily .mouse::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: #fff;
  }

  .daily .mouse::before {
    left: calc(50% - 10px);
  }

  .daily .mouse::after {
    left: calc(50% + 5px);
  }

  .face.professionally {
    background-color: #5cb3fd;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0% {
      top: 10px;
      height: calc(100% - 10px);
      border-bottom-width: 20px;
    }

    50% {
      top: -10px;
      height: 100%;
      border-bottom-width: 20px;
    }

    100% {
      top: 20px;
      height: calc(100% - 10px);
      border-bottom-width: 20px;
    }
  }

  .professionally .eyes {
    position: absolute;
    top: 50px;
    width: 10px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }

  .professionally .eyes::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -20px;
    width: 50px;
    height: 50px;

    border: 2px solid #333;
  }

  .professionally .eyes.left::after {
    content: '';
    position: absolute;
    top: 5px;
    right: -60px;
    width: 40px;
    height: 2px;
    background: #333;
  }

  .professionally .eyes.left {
    left: 50px;
  }

  .professionally .eyes.right {
    right: 50px;
  }

  .professionally .cheek {
    position: absolute;
    top: 90px;
    width: 50px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 20, 147, 0.5);
  }

  .professionally .cheek.left {
    left: -10px;
  }

  .professionally .cheek.right {
    right: -10px;
  }

  .professionally .mouse {
    position: absolute;
    top: 100px;
    left: calc(50% - 50px);
    width: 100px;
    height: 50px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background: black;
  }

  .professionally .mouse::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 15px;
    background: black;
  }

  .professionally .mouse::before, .professionally .mouse::after {
    content: '';
    position: absolute;
    width: 45px;
    height: 15px;
    background: #fff;
  }

  .professionally .mouse::before {
    left: 10px;
  }

  .professionally .mouse::after {
    right: 10px;
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

  h3 {
    margin-top: 50px;
  }
</style>
