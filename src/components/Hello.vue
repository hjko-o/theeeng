<template>
  <div class="hello">
    <hello-world></hello-world>
    <my-name></my-name>
    <characters></characters>
    <daily></daily>
    <daily-data :firebaseDB="firebaseDB"></daily-data>
    <add-data></add-data>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import MyName from './MyName'
import Characters from './Characters'
import Daily from './Daily'
import DailyData from './DailyData'
import AddData from './AddData.vue'

import * as firebase from "firebase"

export default {
  components: {
    HelloWorld,
    MyName,
    Characters,
    Daily,
    DailyData,
    AddData
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
