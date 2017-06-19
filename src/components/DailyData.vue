<template>
  <div class="daily-data">
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="row col-12">
          <h1 class="col-12">일상 현주 제보내용</h1>
          <div class="col-6 col-md-4" v-for="post in posts">
            <p v-for="txt in post.post.split('<br>')">{{txt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as firebase from "firebase"
  export default {
    name: 'daily-data',
    props: ['firebaseDB'],
    data () {
      return {
        posts: []
      }
    },
    watch: {
      firebaseDB: function (value) {
        var ref = value.ref("posts")

        ref.on("child_added", (snapshot) => this.getPosts(snapshot))
      }
    },
    methods: {
      getPosts(value) {
        var post = {
          key: value.key,
          author: value.val().author,
          post: value.val().post,
          like: value.val().like
        }
        this.posts.push(post)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullheight {
    min-height: 100vh;
  }

  h1 {
    margin-bottom: 50px;
  }

  .col-6 {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 10px 10px;
    border: 2px solid darkgray;
    border-radius: 5px;
    cursor: pointer;
    /*background-color: rgba(0, 0, 0, 0.5);*/
  }

  .col-6::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5) url('../assets/like.png') no-repeat center;
    background-size: contain;
    opacity: 0;
  }

  .col-6:hover::before {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
</style>
