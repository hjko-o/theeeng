<template>
  <div class="add-data">
    <div class="container">
      <div class="row align-items-center fullheight">
        <div class="row col-12">
          <h1 class="col-12">제보하기</h1>
          <p class="col-12">현주에 대해서 이것저것 적어주세요ㅎㅎ(아무말 대잔치도 환영합니다)</p>
          <div class="col-12">
            <!--<b-form-select class="md-3 type" v-model="selected" :options="options"></b-form-select>-->
            <b-form-input class="email" v-model="author" type="email" placeholder="Email"></b-form-input>
            <b-form-input class="post" v-model="post" textarea placeholder="내용 입력하기"></b-form-input>
            <b-button class="button" size="large" variant="outline-primary" v-on:click="addPost">
              제보하기<i class="material-icons">add</i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as firebase from "firebase"

  export default {
    name: 'add-data',
    data () {
      return {
        database: '',
        selected: null,
        options: [
          {
            text: '일상 현주',
            value: 'daily'
          },
          {
            text: '직장인 현주',
            value: 'worker'
          }
        ],
        author: '',
        post: ''
      }
    },
    methods: {
      addPost: function () {
        var postData = {
          author: this.author,
          post: this.post.replace(/\n/g, "<br>"),
          like: 0
        };

        var newPostKey = firebase.database().ref().child('posts').push().key;
        var updates = {};
        updates['/posts/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullheight {
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
  }

  p {
    margin-bottom: 50px;
  }

  .type, .email {
    margin-bottom: 10px;
  }

  .post {
    height: 250px;
    resize: none;
  }

  .button {
    width: 100%;
    margin-top: 30px;
    cursor: pointer;
  }

  .material-icons {
    vertical-align: text-top;
  }
</style>
