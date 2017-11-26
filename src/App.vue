<template>
  <div id="app">
    <b-navbar toggleable toggle-breakpoint="sm" fixed="top" type="light" variant="faded">
      <b-navbar-brand tag="h1" class="mb-0">
        <img class="logo" src="../static/assets/theeeng_logo.png"/>
      </b-navbar-brand>
      <b-nav-toggle target="nav_dropdown_collapse" href="#"></b-nav-toggle>

      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-nav is-nav-bar>
          <b-nav-item href="#/front-end">Front-end</b-nav-item>
          <b-nav-item href="#">메뉴1</b-nav-item>
          <b-nav-item href="http://instagram.com/hjko_o">Instagram</b-nav-item>
          <b-nav-item href="http://blog.naver.com/hjko_o">Blog</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .navbar-brand {
    cursor: pointer;
  }

  .logo {
    width: auto;
    height: 40px;
  }
</style>
