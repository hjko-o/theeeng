<template>
  <div id="app">
    <b-navbar toggleable toggle-breakpoint="sm" fixed="top" type="light" variant="link">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>Home</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item>About</b-nav-item>
          <b-nav-item>Contact</b-nav-item>
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
  text-align: center;
  color: #2c3e50;
}
</style>
