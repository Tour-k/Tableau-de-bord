<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
          tile
          depressed
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Êtes-vous sûr ?  
        </v-card-title>

        <v-card-text class="pt-5">
          <p>Attention, vous êtes sur le point de supprimer ce widget.</p> 
          <p>Êtes-vous sûr ? </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="deleteWidget()"
          >
            Oui
          </v-btn>
                    <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >
            Non
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    props: {
      widgetId: {
        type: String,
        required: true, 
        default: "0"
      }
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      deleteWidget() {
        console.log('id du widget à supprimer : ' + this.widgetId);
        axios({
                method: 'post',
                url: 'http://localhost:3000/widget/deleteWidget',
                headers:{'Authorization' : `Basic {$store.state.token}`},
                data: {
                    widgetId: this.widgetId, 
                    }
                })
                .then(response => {
                    console.log(response.data.message); 
                    this.dialog = false;
                    location.reload()


                })
        
        
      }
    }
  }
</script>