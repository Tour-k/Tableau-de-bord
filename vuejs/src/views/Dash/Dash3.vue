<template>
  <div id="dash3">
    <v-container fluide class="d-flex mx-auto">
    <DragNDrop2 :widgets="widgets" :state="state"></DragNDrop2>
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
      widgets: [],
      state: ''
    }
  },
  mounted () {
    //récupérer les widgets du dashboard de base
    this.state = "loading"
    axios({
      method: 'post',
      url: 'http://localhost:3000/widget/getWidgetsByDashboardId',
      headers:{'Authorization' : `Basic ${store.state.token}`},
      data: {
        userId: store.state.userId, 
        numDashboard: 2
      }
    })
    .then(response => {
      this.widgets = response.data;
      this.state = "reçu"
    });
  }
};
</script>

<style>
</style>