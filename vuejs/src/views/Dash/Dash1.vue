<template>
  <div>
    <h1>Dash 1 </h1>
    <Widgets></Widgets>
  </div>
</template>

<script>
 import Widgets from "@/components/widgets/widgetContainer"
// import Weather from "@/components/widgets/Weather"
// import Weather5hours from "@/components/widgets/Weather5hours"

import axios from 'axios';
import store from '../../store/index.js'

export default {
  components: {
    Widgets
    // Insta,
    // Weather,
    // Weather5hours
  },
  mounted () {
    //récupérer les widgets du dashboard
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
      console.log( 'response widgets Dashboard'+ JSON.stringify(response.data));
      // TODO : parcourir l'objet response.data et afficher les widgets voulu
    });
  }
}
</script>