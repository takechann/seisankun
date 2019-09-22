<template>
  <div class='home'>
    <input type='text' placeholder='Username' v-model='username'>
    <br>
    <!--パスワード-->
    <input type='password' placeholder='Password' v-model='password'>
    <br>
    <!--サインインボタン-->
    <button @click='signIn' class='btn'>SignIn</button>
    <br>

    <router-link to="/signup">サインアップはこちら</router-link>
  </div>
</template>

<script>
// Firebase読み込み
import firebase from 'firebase'

export default {
  name: 'home',
  methods: {
    signIn: function () {
      // サインイン処理
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          user => {
            console.log('Success!')
            console.dir(this)
            this.$router.push('/about')
            console.log('hey')
            // router.push('about')
          },
          err => {
            alert(err.message)
          }
        )
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
