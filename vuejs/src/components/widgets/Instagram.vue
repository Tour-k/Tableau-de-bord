<template>
  <v-card raised tile class="cardInsta">
    <v-card-title class="headerCardInsta"> 
      <h1 class="headerInsta">
        Instagram
      </h1>
      <v-spacer></v-spacer>
      <v-icon @click.stop="drawer = !drawer" class="headerInsta">mdi-cog</v-icon>
    </v-card-title>
    <v-card-text class="pa-10">
      <p>User Name : {{ instaDatas.full_name }}</p>
      <p>User Description : {{ instaDatas.description }}</p>
      <p>Fallowers : {{instaDatas.followers}}</p>
      <p>Comments : {{instaDatas.comments}}</p>
      <p>engagement : {{instaDatas.engagement}}</p>
    </v-card-text>
            <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
              width="100%"
              class="pa-8"
            >
            <v-row>
                <v-spacer></v-spacer>
                <v-icon class="mr-5" @click="drawer= false">mdi-close</v-icon>
            </v-row>
            <h2 class="mb-8">Parametrage du widget Instagram</h2>

            <p class="mb-0">Recevoir les informations du compte de : </p>
            <v-form>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Pseudo Instagram*"
                    placeholder="Entrez le pseudo du compte que vous souhaitez suivre"
                    outlined
                    v-model="params[0]"
                    class="text-fieldInsta"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                  <v-col>
                      <v-btn
                          raised
                          @click="submitApi()"
                          class="btnSubmitInsta"
                      > submit
                      </v-btn>
                  </v-col>
              </v-row>
            </v-form>
    </v-navigation-drawer>
    
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    widgetId: { 
      type: String,
      required: true,
    },
    params: {
      type: Array,
      required: true,
      default: function () {
          return ["difractomusic"]
      }
    },
  },
  computed: {
    defaultParam() {
        let arrRes = [];
        if (this.params.length == 0) {
            arrRes = ["animauxtv"];
        } else {
            arrRes = this.params
        }
        return arrRes
    }
  },
  data () {
    return {
        drawer: false,
        url: 'http://localhost:3000/callExternAPI/insta/',
        instaDatas: {}
    }
  }, 
  methods: {
    getApiURL(){
      return  this.url + this.defaultParam[0] + '/';
    }, 
    submitApi() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/widget/updateWidget',
        headers:{'Authorization' : `Basic {$store.state.token}`},
        data: {
            widgetId: this.widgetId, 
            params: [this.defaultParam[0]]
            }
        })
        .then(response => {
            console.log(response.data.message);  
            this.drawer = false;
            axios({
              method: 'get',
              url: this.getApiURL(),
            })
            .then(response => {
              this.instaDatas = response.data;
              this.drawer = false;
            }) 
        });
      
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: this.getApiURL(),
    })
    .then(response => {
      this.instaDatas = response.data;
    })
    .catch(error => {
        console.error(error)
    })
  }
}
</script>

<style scoped>

</style>
