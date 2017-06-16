<template>
  <div class="daily">
    <div class="container">
      <div class="row align-items-center daily-top">
        <h1>Daily hyunju</h1>
        <p class="col-12">현주의 일상에는 별의별 것들이 있습니다:)</p>
        <p class="col-12 tags">
          <span>#다이어트</span>
          <span>#운동</span>
          <span>#요리</span>
          <span>#그릇</span>
          <span>#먹방</span>
          <span>#화장</span>
          <span>#화장품</span>
          <span>#코스메틱</span>
          <span>#옷</span>
          <span>#데일리룩</span>
          <span>#커플</span>
          <span>#카메라</span>
          <span>#볼링</span>
        </p>
        <div class="col-6">
          <img class="logo-img" src="../assets/naver_blog.png" onclick="window.open('http://blog.naver.com/hjko_o')"/>
          <h3>일상블로그<br>뚜뚜몬의 작심삼일</h3>
        </div>
        <div class="col-6">
          <img class="logo-img" src="../assets/instagram.png" onclick="window.open('http://instagram.com/diet_hjko')"/>
          <h3>다이어트그램<br>diet_hjko</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'daily'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .daily {
    padding: 200px 0;
    background: url('../assets/daily_bg.jpg') no-repeat fixed top center;
    background-size: cover;
    background-color: lavender;
  }

  .container {
    width: 100%;
    max-width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .row {
    max-width: 700px;
    min-height: calc(100vh - 400px);
    margin: 0 auto;
    padding: 50px 0;
  }

  .daily-top h1 {
    margin: 0 auto 30px auto;
  }

  .daily-top p {
    margin: 3px auto;
  }

  .tags span {
    margin: 0 3px;
  }

  .logo-img {
    width: 130px;
    height: 130px;
    margin: 50px 0 20px 0;
    cursor: pointer;
  }

  .daily-top h3 {
    font-size: 13pt;
    line-height: 1.5;
    cursor: pointer;
  }
</style>
