import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// Firebase読み込み
import firebase from 'firebase'

// Firebase設定
let firebaseConfig = {
  apiKey: 'AIzaSyCNPDO2lQK6jjw9jjHhzdFCAgb_GPEDaGc',
  authDomain: 'seisankun-user-master.firebaseapp.com',
  databaseURL: 'https://seisankun-user-master.firebaseio.com',
  projectId: 'seisankun-user-master',
  storageBucket: '',
  messagingSenderId: '920878624647',
  appId: '1:920878624647:web:559998d84030575f86ed22'
}
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
