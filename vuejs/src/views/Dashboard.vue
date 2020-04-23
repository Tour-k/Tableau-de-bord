<template>
  <div class="dashboard">

    <NavBarDashboard></NavBarDashboard>
    <Graph></Graph>
    <h1 class="mt-60">Test  {{ user }}</h1> 
    <p>{{$store.state.token}}</p>
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
      data: {email: 'K@gmail.com'}
    })
    .then(function (response) {
      console.log(response);
    });
  }
}
</script>
