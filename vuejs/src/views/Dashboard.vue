<template>
  <div class="dashboard">
    <NavBarDashboard></NavBarDashboard>
    <h1 class="mt-60">Test  {{ user }}</h1>
   
  </div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios';
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
  mounted () {
    axios.get('http://localhost:3001/api/auth/user', 
    { params: {email: 'test7@gmail.com'}}
    ).then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>
