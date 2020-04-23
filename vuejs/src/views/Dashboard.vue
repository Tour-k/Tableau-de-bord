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
}
</script>
