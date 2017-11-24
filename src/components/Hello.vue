<template>
  <div class="hello">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'

import * as firebase from "firebase"

export default {
  components: {
    HelloWorld
  },
  name: 'hello',
  data () {
    return {
        firebaseDB: null
    }
  },
  mounted: function () {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
