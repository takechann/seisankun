<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signin">ログイン</router-link> | -->
      <button @click='logout' v-show='logoutShow'>サインアウト</button>
      <h2>精算くん</h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
// Firebase読み込み
import firebase from 'firebase'

export default {
  name: 'app',
  methods: {
    logout: function () {
      // firebase.auth().onAuthStateChanged((user) => {
      //   firebase.auth().signOut().then(() => {
      //     console.log('ログアウトしました')
      //   })
      //     .catch((error) => {
      //       console.log('ログアウト時にエラーが発生しました' + error)
      //     })
      // })
      this.$router.push('/')
      firebase.auth().signOut()
    }
  },
  data () {
    return {
      logoutShow: true
    }
  }
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
