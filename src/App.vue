<template>
  <div id="app">
    <b-navbar toggleable toggle-breakpoint="sm" fixed="top" type="light" variant="faded">
      <b-navbar-brand tag="h1" class="mb-0" to="/">
        <img class="logo" src="./assets/theeeng_logo.png"/>
      </b-navbar-brand>
      <b-nav-toggle target="nav_dropdown_collapse" href="#"></b-nav-toggle>

      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          <b-nav-item to="/portfolio">메뉴1</b-nav-item>
          <b-nav-item href="http://instagram.com/hjko_o">Instagram</b-nav-item>
          <b-nav-item href="http://blog.naver.com/hjko_o">Blog</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default {
    name: 'App',
    data () {
      return {
        firebaseDB: null
      }
    },
    created: function () {
      var config = {
        apiKey: "AIzaSyDqgUSonXT1BLRczfgJ7hBfWnbZcgiyNIo",
        authDomain: "my-web-faf45.firebaseapp.com",
        databaseURL: "https://my-web-faf45.firebaseio.com",
        storageBucket: "my-web-faf45.appspot.com"
      }
      firebase.initializeApp(config)

      this.firebaseDB = firebase.database()
    }
  }
</script>

<style>
  * {
    word-break: keep-all;
  }

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
