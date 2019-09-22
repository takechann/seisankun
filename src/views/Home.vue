<template>
  <div class='home'>
    <input type='text' placeholder='e-mailアドレス' v-model='username'>
    <br>
    <!--パスワード-->
    <input type='password' placeholder='パスワード' v-model='password'>
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
            alert('ログイン成功 => 次の画面へ遷移')
            this.$router.push('/about')
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
