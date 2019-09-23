<template>
  <div class='signUP'>
    <h2>Sign up</h2>
    <input type="text" placeholder="e-mailアドレス" v-model="username">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="signUp">登録</button>
  </div>
</template>

<script>
// Firebase読み込み
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          if (error.message === 'The email address is badly formatted.') {
            console.log('ok')
            alert('アドレス表記が不適切です')
          } else if (error.message === 'The password must be 6 characters long or more.') {
            alert('パスワードは6文字以上を設定してください')
          } else {
            alert(error.message)
          }
        })
    }
  }
}
</script>
