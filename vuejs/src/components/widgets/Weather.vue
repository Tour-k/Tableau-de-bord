<template class="templateMeteo">
    <v-card raised tile class="cardMeteo">
        <div class="contentMeteo">
            <v-container>
                <v-card-title> 
                    <h1 class="headerWeather">
                        Météo du jour
                    </h1>
                    <v-spacer></v-spacer>
                     <v-icon @click.stop="drawer = !drawer" class="headerWeather">mdi-cog</v-icon>
                </v-card-title>
                <v-divider class="dividerMeteo"></v-divider>
            </v-container>
            <v-container class="info1Meteo">
                <p class="nomVilleMeteo"> {{ info.name }} - {{ info.sys.country }} </p>
                <v-row>
                    <v-col>
                        <v-img :src="getUrl()" class="iconMeteo" />
                    </v-col>
                    <v-col class=" info2Meteo">
                        <v-row class="text-capitalize">
                            <p><b>{{ info.weather[0].description }}</b></p>
                        </v-row>
                        <v-row>
                            <p> Température : <b>{{ roundTemp(info.main.temp) }}°C</b> </p>
                        </v-row>
                        <v-row>
                            <p> Min: <b>{{ roundTemp(info.main.temp_min) }}°C</b> </p>
                        </v-row>
                        <v-row>
                            <p> Max: <b>{{ roundTemp(info.main.temp_max) }}°C</b>  </p>
                        </v-row>
                        <v-row>
                            <p>Pression: <b>{{ info.main.pressure }}hPa</b> </p>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>

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
      <h2 class="mb-8">Parametrage du widget météo</h2>

      <p class="mb-0">Recevoir la météo de votre ville : </p>
                    <v-form>
                        <v-row>
                            <v-col>
                                <v-text-field
                                        label="city*"
                                        placeholder="Entrez une ville"
                                        outlined
                                        v-model="params[0]"
                                        class="text-fieldMeteo"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn
                                    raised
                                    @click="submitApi()"
                                    class="btnMeteo"
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
        name: "weather",
        props: {
            widgetId: { 
                type: String,
                required: true,
            },
            params: {
                type: Array,
                required: true,
                default: () => ['Paris']
            },
        },
        data () {
          return {
              drawer: false,
              info: null,
              dynamicUrl: null,
              apiUrl: null,
              city: "Paris",
          }
        },
        computed: {
            defaultParam() {
                let arrRes = [];
                if (this.params.length == 0) {
                    arrRes = ["Paris"];
                } else {
                    arrRes = this.params
                }
                return arrRes
            }
        },
        methods: {
            roundTemp(temp) {
                return Math.round(parseInt(temp));
            },
            getUrl() {
                return "http://openweathermap.org/img/wn/"+ this.dynamicUrl +".png";
            },
            getApiUrl() {
                return 'http://api.openweathermap.org/data/2.5/weather?q='+ this.defaultParam[0] +'&appid=43daf01fa0e80de005440d64a76ed5bb&units=metric&lang=fr'
            },
            submitApi() {
                //mise à jour de la BDD
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
                    axios
                        .get(this.getApiUrl())
                        .then(response => {
                            this.info = response.data;
                            this.dynamicUrl = response.data.weather[0].icon;
                        });  
                });
            },
        }, 
        mounted () {
            axios
                .get(this.getApiUrl())
                .then(response => {
                    this.info = response.data;
                    this.dynamicUrl = response.data.weather[0].icon;
                });
        },

    }
</script>

<style scoped>
    .cardMeteo {
        max-width: 1920px; 
        color: #252525!important;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    .contentMeteo{
        background: rgb(254,254,254);
        background: radial-gradient(circle, rgba(254,254,254,1) 0%, rgba(246,232,216,1) 21%, rgba(89,170,249,1) 100%);
        text-align: center;
    }
    .btnMeteo {
        position: relative;
        top:10px;
    }
    .iconMeteo {
        height: 200px;
        width: 200px;
    }
    .text-fieldMeteo {
        color: #FFFFFF;
    }
    .info1Meteo {
        font-size: 20px ;
    }
    .info2Meteo {
        text-align: left;
    }
    .nomVilleMeteo {
        font-size: 35px;
        text-align: center;
    }
    .dividerMeteo {
        background-color: #FFFFFF;
        width: 100%
    }

    .headerWeather{
        color: white;
        font-family: Roboto;
        font-size: 20px;
    }
</style>
