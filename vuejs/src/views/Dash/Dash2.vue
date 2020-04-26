<template>
  <div id="dash2">
    <v-container fluide class="d-flex">
    <DragNDrop2 :widgets="widgets" :state="state"></DragNDrop2>
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
        numDashboard: 1
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
