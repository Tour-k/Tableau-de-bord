<template>
  <div id="dash1">
    <v-container fluide class="d-flex">
    <DragNDrop2 :widgets="widgets"></DragNDrop2>
    </v-container>
  </div>
</template>

<script>
//  import Widgets from "@/components/widgets/widgetContainer"
import DragNDrop2 from "@/components/Base/DragNDrop";
// import Weather from "@/components/widgets/Weather"
// import Weather5hours from "@/components/widgets/Weather5hours"

import axios from 'axios';
import store from '../../store/index.js'

export default {
  components: {
    DragNDrop2
    // Insta,
    // Weather,
    // Weather5hours
  },
  data () {
    return {
      widgets: null,
    }
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
      this.widgets = response
      // TODO : parcourir l'objet response.data et afficher les widgets voulu
    });
  }
}
</script>