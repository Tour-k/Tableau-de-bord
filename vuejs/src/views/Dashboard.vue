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
import Graph from "@/components/widgets/graph"
import store from '../store/index.js'

export default {
  name: 'Dashboard',
  components: {
    NavBarDashboard,
    Graph
  },
  data () {
    return {
      user: {},
    }
  },
  mounted () {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/auth/user',
      headers:{'Authorization' : `Basic ${store.state.token}`},
      data: {email: 'test7@gmail.com'}
    })
    .then(function (response) {
      console.log(response);
    });
  }
}
</script>
