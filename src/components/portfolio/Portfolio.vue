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
        <h5>데이코어 (16.06~17.12)</h5>
        <h6>랩짐데이 홈페이지 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>랩짐데이 트레이너 관리용 웹 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>랩짐데이 홈페이지 리뉴얼 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>데이코어 회사 홈페이지 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>랩짐데이 그룹피티 관리용 웹 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>짐데이 ios 앱 업데이트 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
      </div>
      <div class="career">
        <h5>솔게이트 (15.06~16.04)</h5>
        <h6>레몬커플(Remoncouple) 홈페이지 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>레몬커플 관리자 페이지 디버깅<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
        <h6>소개팅 홈페이지 기획 및 개발<span><icon class="arrow-icon" name="chevron-circle-down" scale="1"></icon></span></h6>
      </div>
    </div>
    <div class="portfolio-module">
      <div class="container">
        <div class="row align-items-center fullheight">
          <div class="col-12">
            <h3>Angular Framework</h3>
            <h3>랩짐데이 웹 리뉴얼</h3>
            <h6><a class="portfolio-link" href="http://lab.gymday.co.kr" target="_blank">http://lab.gymday.co.kr</a></h6>
            <h6>
              오프라인 센터 랩짐데이(Lab Gymday) 소개와 PT, SGT(Small Group Training) 소개하는 메뉴로 구성되어 있고
              PT 메뉴에서는 PT 상담을 신청할 수 있습니다.
            </h6>
            <h6>
              Angular 프레임워크와 Material 디자인 라이브러리를 적용하여 개발하였습니다.
            </h6>
            <h6>
              홈페이지 구성을 오프라인 센터 소개에 맞게 수정을 하면 좋을 것 같아 개인적으로 디자인 리뉴얼 작업을 하여 Firebase 호스팅으로 연결하였습니다.
              리뉴얼 디자인은 구글 검색을 통해 휘트니스, 헬스케어 웹 사이트를 참고하여 개발하였습니다.
              <a href="https://gymday-wannabe-web.firebaseapp.com" target="_blank">(보러가기)</a>
            </h6>
            <img class="project-sample-image" src="/static/assets/labgymday_renewal_web.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-module">
      <div class="container">
        <div class="row align-items-center fullheight">
          <div class="col-12">
            <h3>Vue.js Framework</h3>
            <h3>데이코어 회사소개 홈페이지</h3>
            <h6><a class="portfolio-link" href="http://daycore.co.kr" target="_blank">http://daycore.co.kr</a></h6>
            <h6>
              회사 소개용의 간단한 홈페이지입니다. API를 사용하는 기능은 없지만, 간단한 홈페이지이기 때문에 Vue.js 연습용으로 적용해보았습니다.
            </h6>
            <h6>
              Vue.js 프레임워크와 Bootstrap 디자인 라이브러리를 적용하여 개발하였습니다.
            </h6>
            <img class="project-sample-image" src="/static/assets/labgymday_renewal_web.png"/>
          </div>
        </div>
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
    background: url("/static/assets/portfolio_background_04.jpg") no-repeat center;
    background-size: cover;
    background-color: azure;
    text-align: center;
  }

  .career {
    max-width: 400px;
    margin: 0 auto 50px auto;
  }

  .portfolio-career h5 {
    padding: 10px 30px;
    margin: 0 0 30px 0;
    font-weight: 900;
    border: 2px solid #333;
    border-radius: 50px;
  }

  .portfolio-career h6 {
    padding-left: 10px;
    margin-bottom: 0;
    line-height: 50px;
    border-bottom: 1px solid #333;
    color: #333;
    text-align: left;
    cursor: pointer;
  }

  .portfolio-career h6:hover {
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

  .portfolio-module .container {
    max-width: 600px;
    border-bottom: 2px solid #dedede;
  }

  .portfolio-module a {
    color: #333;
    text-decoration-line: none;
  }

  .portfolio-module h3 {
    margin-top: 20px;
    font-weight: 900;
  }

  .portfolio-module h6 {
    margin-bottom: 20px;
    font-weight: 200;
  }

  .portfolio-module .portfolio-link {
    font-weight: 900;
  }

  .portfolio-module h6 a:not(.portfolio-link) {
    font-weight: 400;
  }

  .project-sample-image {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
</style>
