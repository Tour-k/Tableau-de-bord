<template>
  <div class="dashboard">
    <NavBarDashboard>
      <template v-slot:content>
        <router-view></router-view>
      </template>
    </NavBarDashboard>
  </div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios';
import NavBarDashboard from "@/components/Base/navbar-dashboard"
import store from '../store/index.js'


export default {
  name: 'Dashboard',
  components: {
    NavBarDashboard,

  },
  data () {
    return {
      user: {},
    }
  },
  beforeMount () {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/auth/user',
      headers:{'Authorization' : `Basic ${store.state.token}`},
      data: {email: 'test7@gmail.com'}
    })
    .then(function (response) {
      console.log(response);
    });
  },
  mounted () {
    axios({
      method: 'post',
      url: 'http://localhost:3000/widget/getWidgetsByDashboardId',
      headers:{'Authorization' : `Basic ${store.state.token}`},
      data: {
        userId: store.state.userId, 
        numDashboard: 0
      }
    })
    .then(function (response) {
      console.log(response);
    });
  }
    
    // TODO : Kévin => Envoyer une requete pour charger le dashboard par défault
   


  // mounted () {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3000/api/auth/user',
  //     headers:{'Authorization' : `Basic ${store.state.token}`},
  //     data: {id: this.$store.state.userId}
  //   })
  //   .then(function (response) {
  //     console.log(response.data);
  //   });
  // }

}
</script>
