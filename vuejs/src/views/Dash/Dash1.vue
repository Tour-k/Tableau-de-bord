<template>
  <div id="dash1">
    <v-container fluide class="d-flex">
      {{widgets}}
    <DragNDrop2 :widgets="widgets" :state="state"></DragNDrop2>
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
      widgets: [],
      state: ''
    }
  },
  mounted () {
    //récupérer les widgets du dashboard
    this.state = "loading"
    axios({
      method: 'post',
      url: 'http://localhost:3000/widget/getWidgetsByDashboardId',
      headers:{'Authorization' : `Basic ${store.state.token}`},
      data: {
        userId: store.state.userId, 
        numDashboard: 0
      }
    })
    .then(response => {
      this.widgets = response.data;
      this.state = "reçu"
    });
  }
}
</script>