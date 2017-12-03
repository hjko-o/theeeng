<template>
  <div class="portfolio">
    <div class="portfolio-title container">
      <div class="row align-items-center fullheight">
        <div class="col">
          <h1>Hello portfolio</h1>
        </div>
      </div>
    </div>
    <div class="portfolio-career">
      <div class="career">
        <h2>솔게이트 (15.06~16.04)</h2>
        <h3>레몬커플(Remoncouple) 홈페이지 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>레몬커플 관리자 페이지 디버깅<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>소개팅 홈페이지 기획 및 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
      </div>
      <div class="career">
        <h2>데이코어 (16.06~17.12)</h2>
        <h3>랩짐데이 홈페이지 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>랩짐데이 트레이너 관리용 웹 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>랩짐데이 홈페이지 리뉴얼 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>데이코어 회사 홈페이지 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>랩짐데이 그룹피티 관리용 웹 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
        <h3>짐데이 ios 앱 업데이트 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portfolio'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullheight {
    min-height: 100vh;
  }

  .portfolio-title {
    max-width: 100%;
    background-color: antiquewhite;
  }

  .portfolio-title h1 {
    margin-bottom: 50px;
    font-size: 45pt;
    font-weight: 600;
    letter-spacing: 15px;
    color: #333;
    text-align: center;
  }

  .portfolio-career {
    width: 100%;
    padding: 100px 30px;
    background: url("/static/assets/portfolio_background_03.jpg") no-repeat center;
    background-size: cover;
    background-color: azure;
    text-align: center;
  }

  .career {
    max-width: 400px;
    margin: 0 auto 100px auto;
  }

  .portfolio-career h2 {
    padding: 10px 30px;
    margin: 0 0 30px 0;
    font-size: 15pt;
    font-weight: 900;
    border: 2px solid #333;
    border-radius: 50px;
  }

  .portfolio-career h3 {
    padding-left: 10px;
    margin-bottom: 0;
    font-size: 13pt;
    line-height: 50px;
    border-bottom: 1px solid #333;
    color: #333;
    text-align: left;
    cursor: pointer;
    /*background-color: rgba(255, 255, 255, 0.5);*/
  }

  .portfolio-career h3:hover {
    transform:translateY(-10px);
    transition: transform 0.5s;
  }

  .portfolio-career span {
    float: right;
    padding-right: 10px;
  }

  .portfolio-career .arrow-icon {
    vertical-align: middle;
  }
</style>
