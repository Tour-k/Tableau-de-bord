<template>
  <div id="dash2">
    <v-container fluide class="d-flex">
    <DragNDrop2 :widgets="widgets"></DragNDrop2>
    </v-container>
  </div>
</template>

<script>
import DragNDrop2 from "@/components/Base/DragNDrop";
import axios from 'axios';
import store from '../../store/index.js'

export default {
  name: "app",
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
        numDashboard: 1
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
#dash2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#dash2 .logo {
  text-align: center;
}
</style>
