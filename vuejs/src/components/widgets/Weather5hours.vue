<template>
    <v-card raised tile class="cardMeteo">
        <v-card-title> 
                <h1 class="headerWeather">
                    Météo 3h 
                </h1>
                <v-spacer></v-spacer>
                <v-icon @click.stop="drawer = !drawer" class="headerWeather">mdi-cog</v-icon>
        </v-card-title>
        <v-divider class="dividerMeteo"></v-divider>
        <v-card-text class="pa-10">
            <p class="nomVilleMeteo mt-5"> {{info.city.name}} - {{info.city.country}} </p>
            <v-row>
                <v-col v-for="(n, i) in 4" :key="n">
                    <v-row>
                         {{formatDate(info.list[i].dt_txt)}}
                    </v-row>
                    <v-avatar color="primary" size="62">
                        <v-img :src="getUrl(i)" height="50px" width="50px"/>
                    </v-avatar>
                    <v-row class="text-capitalize">
                        {{info.list[i].weather[0].description}}
                    </v-row>
                    <v-row>
                        Min : {{ info.list[i].main.temp_min }} °C
                    </v-row>
                    <v-row>
                        Max : {{ info.list[i].main.temp_max }} °C
                    </v-row>
                    <v-row>
                        Pressions: {{ info.list[i].main.pressure }} hPa
                    </v-row>
                </v-col>
            </v-row>
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
      <h2 class="mb-8">Parametrage du widget météo</h2>

      <p class="mb-0">Recevoir la météo de votre ville : </p>
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
    import axios from "axios";

    export default {
        name: "Weather5hours",
        components: {
        },
        data() {
            return {
                drawer: false,
                info: null,
                dynamicUrl: null,
                apiUrl: null,
                city: "Paris",
            }
        },
        methods: {
            formatDate(fullDate){
                let splitFullDayH = fullDate.split(" ");
                let splitDay = splitFullDayH[0].split("-");
                let splitH = splitFullDayH[1].split(":");
                let mounth = "";
                if(splitDay[1] == '01'){
                    mounth = "jan."
                }
                if(splitDay[1] == '02'){
                    mounth = "fev."
                }
                if(splitDay[1] == '03'){
                    mounth = "far."
                }
                if(splitDay[1] == '04'){
                    mounth = "avr."
                }
                if(splitDay[1] == '05'){
                    mounth = "mai."
                }
                if(splitDay[1] == '06'){
                    mounth = "jun."
                }
                if(splitDay[1] == '07'){
                    mounth = "jui."
                }
                if(splitDay[1] == '08'){
                    mounth = "aou."
                }
                if(splitDay[1] == '09'){
                    mounth = "sep."
                }
                if(splitDay[1] == '10'){
                    mounth = "oct."
                }
                if(splitDay[1] == '11'){
                    mounth = "nov."
                }
                if(splitDay[1] == '12'){
                    mounth = "dec."
                }
                return splitDay[2] +' '+ mounth +' à '+ splitH[0] +'h' + splitH[1] ;
            },
            getUrl(i) {
                return "http://openweathermap.org/img/wn/"+ this.info.list[i].weather[0].icon +".png";
            },
            getApiUrl() {
                return 'http://api.openweathermap.org/data/2.5/forecast?q='+ this.city +'&appid=43daf01fa0e80de005440d64a76ed5bb&units=metric&lang=fr'
            },
            submitApi() {
                axios
                    .get(this.getApiUrl())
                    .then(response => {
                        this.info = response.data;
                        this.drawer = false;
                    })
            }
        },
        mounted() {
            axios
                .get(this.getApiUrl())
                .then(response => {
                    this.info = response.data;
                })
        }
    }
</script>

<style scoped>
    .cardMeteo {
        max-width: 1920px; 
        min-width: 800px; 
        background: rgb(254,254,254);
        background: radial-gradient(circle, rgba(254,254,254,1) 0%, rgba(246,232,216,1) 21%, rgba(89,170,249,1) 100%);
        color: #252525;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .dividerMeteo {
        background-color: #FFFFFF;
        width: 100%
    }
    .nomVilleMeteo {
        font-size: 35px;
        text-align: center;
    }
    .headerWeather{
        color: white;
        font-family: Roboto;
        font-size: 20px;
    }
</style>
