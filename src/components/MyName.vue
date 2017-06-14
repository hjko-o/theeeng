<template>
  <div class="my-name">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="col-12">
          <div class="pacman-holder moving">
            <div class="pacman-container">
              <div class="pacman-body"></div>
              <div class="pacman-mouth">
                <div class="pacman"></div>
              </div>
            </div>

            <div class="dot"></div>
          </div>

          <h3>My name is {{name}}</h3>
          <p class="text">여기는 {{name}}의 아무말 대잔치가 열리고 있는 공간입니다.</p>
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
        name: 'Hyunju'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-name {
    position: relative;
    background: #add8e6;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    border: 2px solid #245269;
    border-radius: 50%;
    opacity: 0.3;
  }

  .circle:nth-of-type(1) {
    bottom: 3%;
    left: 50%;
    width: 50px;
    height: 50px;
    animation: border-expand 2s 1s linear infinite;
  }

  .circle:nth-of-type(2) {
    bottom: 5%;
    left: 20%;
    width: 130px;
    height: 130px;
    animation: border-expand 3s 2s linear infinite;
  }

  .circle:nth-of-type(3) {
    bottom: 50px;
    left: 75%;
    width: 80px;
    height: 80px;
    animation: border-expand 1.5s 2s linear infinite;
  }

  .circle:nth-of-type(4) {
    bottom: 100px;
    left: calc(75% - 100px);
    width: 100px;
    height: 100px;
    animation: border-expand 3s 3s linear infinite;
  }

  .circle:nth-of-type(5) {
    bottom: 20px;
    left: calc(50% - 150px);
    width: 150px;
    height: 150px;
    animation: border-expand 1.5s 0.5s linear infinite;
  }

  @keyframes border-expand {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  .fullheight {
    min-height: 100vh;
  }

  h3 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 30pt;
  }

  .text {
    font-size: 20pt;
  }


  .pacman-holder {
    position: relative;
    width: 140px;
    margin: 0px auto 100px auto;
  }

  .pacman-container {
    display: block;
    width: 70px;
    height: 70px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-animation: bite 0.5s linear infinite;
    -webkit-animation: bite 0.5s linear infinite;
    animation: bite 0.5s linear infinite;
  }

  .pacman-body {
    background-color: #ff0;
    position: absolute;
    width: 70px;
    height: 70px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }

  .dot {
    background-color: #f0fff0;
    position: absolute;
    z-index: 0;
    top: 25px;
    left: 115px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: dotMove 1.5s infinite;
  }

  .pacman {
    position: absolute;
    width: 70px;
    height: 70px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    clip: rect(0px, 35px, 70px, 0px);
    z-index: 2;
  }

  .pacman-mouth {
    position: absolute;
    left: 2px;
    width: 72px;
    height: 72px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    clip: rect(0px, 70px, 70px, 37px);
  }

  .pacman-mouth .pacman {
    background-color: #add8e6;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -moz-animation: munch 0.5s linear infinite;
    -webkit-animation: munch 0.5s linear infinite;
    animation: munch 0.5s linear infinite;
  }

  .pacman-holder.moving {
    width: 70px;
    -moz-animation: move 3s linear infinite;
    -webkit-animation: move 3s linear infinite;
    animation: move 3s linear infinite;
  }

  @-moz-keyframes munch {
    0% {
      -moz-transform: rotate(90deg);
    }
    50% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(90deg);
    }
  }

  @-webkit-keyframes munch {
    0% {
      -webkit-transform: rotate(90deg);
    }
    50% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(90deg);
    }
  }

  @keyframes munch {
    0% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  @-moz-keyframes bite {
    0% {
      -moz-transform: rotate(45deg);
    }
    50% {
      -moz-transform: rotate(90deg);
    }
    100% {
      -moz-transform: rotate(45deg);
    }
  }

  @-webkit-keyframes bite {
    0% {
      -webkit-transform: rotate(45deg);
    }
    50% {
      -webkit-transform: rotate(90deg);
    }
    100% {
      -webkit-transform: rotate(45deg);
    }
  }

  @keyframes bite {
    0% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes dotMove {
    0% {
      left: 115px;
      z-index: 1;
    }
    49.99% {
      left: 15px;
      z-index: -1;
    }
    50% {
      left: 115px;
      z-index: 1;
    }
    100% {
      left: 15px;
      z-index: -1;
    }
  }

  @-webkit-keyframes dotMove {
    0% {
      left: 115px;
      z-index: 1;
    }
    49.99% {
      left: 15px;
      z-index: -1;
    }
    50% {
      left: 115px;
      z-index: 1;
    }
    100% {
      left: 15px;
      z-index: -1;
    }
  }

  @-moz-keyframes dotMove {
    0% {
      left: 115px;
      z-index: 1;
    }
    49.99% {
      left: 15px;
      z-index: -1;
    }
    50% {
      left: 115px;
      z-index: 1;
    }
    100% {
      left: 15px;
      z-index: -1;
    }
  }

  @-webkit-keyframes move {
    0% {
      -webkit-transform: scaleX(1);
      left: -140px;
    }

    49.999% {
      left: 140px;
      -webkit-transform: scaleX(1);
    }
    50% {
      -webkit-transform: scaleX(-1);
    }

    100% {
      left: -140px;
      -webkit-transform: scaleX(-1);
    }
  }

  @-moz-keyframes move {
    0% {
      -moz-transform: scaleX(1);
      left: -140px;
    }

    49.999% {
      left: 140px;
      -moz-transform: scaleX(1);
    }
    50% {
      -moz-transform: scaleX(-1);
    }

    100% {
      left: -140px;
      -moz-transform: scaleX(-1);
    }
  }

  @keyframes move {
    0% {
      transform: scaleX(1);
      left: -140px;
    }

    49.999% {
      left: 140px;
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(-1);
    }

    100% {
      left: -140px;
      transform: scaleX(-1);
    }
  }
</style>
