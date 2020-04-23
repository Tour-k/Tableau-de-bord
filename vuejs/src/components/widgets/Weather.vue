<template class="templateMeteo">
    <v-card raised tile class="cardMeteo">
        <div class="contentMeteo">
            <v-container>
                <v-card-title> 
                    <h1>
                        Météo du jour
                    </h1>
                     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                </v-card-title>
                <v-divider class="dividerMeteo"></v-divider>
                <div class="input">
                    <v-form>
                        <v-row>
                            <v-col>
                                <v-text-field
                                        label="city*"
                                        placeholder="Entrez une ville"
                                        outlined
                                        v-model="city"
                                        class="text-fieldMeteo"
                                ></v-text-field>
                            </v-col>
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
                </div>
                <v-divider class="dividerMeteo"></v-divider>
            </v-container>
            <v-container class="info1Meteo">
                <p class="nomVilleMeteo"> {{ info.name }} - {{ info.sys.country }} </p>
                <v-divider class="dividerMeteo"></v-divider>
                <v-row>
                    <v-col>
                        <v-img :src="getUrl()" class="iconMeteo" />
                    </v-col>
                    <v-col class=" info2Meteo">
                        <v-row>
                            <p>{{ info.weather[0].description }}</p>
                        </v-row>
                        <v-row>
                            <p> {{ info.main.temp }} ° </p>
                        </v-row>
                        <v-row>
                            <p> Max: {{ info.main.temp_max }}° </p>
                        </v-row>
                        <v-row>
                            <p> Min: {{ info.main.temp_min }} </p>
                        </v-row>
                        <v-row>
                            <p> {{ info.main.pressure }} hPa </p>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>

<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      floating
    >
      
    </v-navigation-drawer>

    </v-card>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "weather",
        props: {
            test: String
        },
        components: {

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
        methods: {
            getUrl() {
                return "http://openweathermap.org/img/wn/"+ this.dynamicUrl +".png";
            },
            getApiUrl() {
                return 'http://api.openweathermap.org/data/2.5/weather?q='+ this.city +'&appid=43daf01fa0e80de005440d64a76ed5bb&units=metric&lang=fr'
            },
            submitApi() {
                axios
                    .get(this.getApiUrl())
                    .then(response => {
                        this.info = response.data;
                        this.dynamicUrl = response.data.weather[0].icon;
                    })
            }
        },
        mounted () {
            axios
                .get(this.getApiUrl())
                .then(response => {
                    this.info = response.data;
                    this.dynamicUrl = response.data.weather[0].icon;
                })
        },
    }
</script>

<style scoped>
    .cardMeteo {
        height: 500px;
        width: 500px;
    }
    .contentMeteo{
        background: rgb(254,254,254);
background: radial-gradient(circle, rgba(254,254,254,1) 0%, rgba(246,232,216,1) 21%, rgba(89,170,249,1) 100%);
        text-align: center;
        color: #404040;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
</style>
