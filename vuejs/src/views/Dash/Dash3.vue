<template>
  <div id="dash3">
    <v-container fluide class="d-flex">
    <DragNDrop2 :widgets="widgets"></DragNDrop2>
    <widgets></widgets>
    </v-container>
  </div>
</template>

<script>
import DragNDrop2 from "@/components/Base/DragNDrop";
import axios from 'axios';
import store from '../../store/index.js'

export default {
  name: "Dash3",
  components: {
    DragNDrop2
  },
  data () {
    return {
      widgets: null,
    }
  },
  mounted () {
    //récupérer les widgets du dashboard de base
    axios({
      method: 'post',
      url: 'http://localhost:3000/widget/getWidgetsByDashboardId',
      headers:{'Authorization' : `Basic ${store.state.token}`},
      data: {
        userId: store.state.userId, 
        numDashboard: 2
      }
    })
    .then(function (response) {
      console.log( 'response widgets Dashboard'+ JSON.stringify(response.data));
       this.widgets = response
    });
  }
};
</script>

<style>
</style>