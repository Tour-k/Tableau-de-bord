<template>
  <div class="dashboard">
    <NavBarDashboard v-on:reload-dashboard-info="reloadDashboardInfo">
      <template v-slot:content>
        <router-view></router-view>
      </template>
    </NavBarDashboard>
  </div>
</template>


<script>
// @ is an alias to /src
// import axios from 'axios';
// import store from '../store/index.js'
import NavBarDashboard from "@/components/Base/navbar-dashboard"



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
  methods: {
    reloadDashboardInfo(id) {
      console.log("dash id to reload : " + id);
      location.reload()
    }
  }
  
  
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
