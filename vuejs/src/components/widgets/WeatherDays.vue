<template>
    <v-card raised shaped class="cardMeteo">
        <v-container class="contentMeteo">
            <v-row>
                <h1> &bull; Météo 3h &bull; </h1>
            </v-row>
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
            <v-row class="nomVilleMeteo">
                {{info.city.name}} - {{info.city.country}}
            </v-row>
            <v-divider class="dividerMeteo"></v-divider>
            <v-row>
                <v-col>
                    <v-row>
                        {{info.list[7].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[7].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[7].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[7].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[7].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[15].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[15].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[15].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[15].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[15].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[23].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[23].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[23].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[23].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[23].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[31].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[31].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[31].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[31].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[31].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[39].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[39].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[39].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[39].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[39].weather[0].description}}
                    </v-row>
                </v-col>
            </v-row>
            <v-divider class="dividerMeteo"></v-divider>
        </v-container>
    </v-card>
</template>

<script>
    import axios from "axios";

    export default {
        name: "WeatherDays",
        components: {

        },
        props: {
          widgetId: String  
        },
        data() {
            return {
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
                return 'http://api.openweathermap.org/data/2.5/forecast?q='+ this.city +'&appid=43daf01fa0e80de005440d64a76ed5bb&units=metric&lang=fr'
            },
            submitApi() {
                axios({
                method: 'post',
                url: 'http://localhost:3000/widget/updateWidget',
                headers:{'Authorization' : `Basic {$store.state.token}`},
                data: {
                    widgetId: this.widgetId, 
                    params: [this.city]
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
            }
        },
        mounted() {
            axios
                .get(this.getApiUrl())
                .then(response => {
                    this.info = response.data;
                    this.dynamicUrl = response.data.list[0].weather[0].icon;
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
