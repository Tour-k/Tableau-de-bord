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
                        {{info.list[0].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[0].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[0].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[0].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[0].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[1].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[1].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[1].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[1].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[1].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[2].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[2].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[2].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[2].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[2].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[3].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[3].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[3].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[3].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[3].weather[0].description}}
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        {{info.list[4].dt_txt}}
                    </v-row>
                    <v-img :src="getUrl()" height="50px" width="50px"/>
                    <v-row>
                        {{info.list[4].main.temp_min}} °
                    </v-row>
                    <v-row>
                        {{info.list[4].main.temp_max}} °
                    </v-row>
                    <v-row>
                        {{info.list[4].main.pressure}} hPa
                    </v-row>
                    <v-row>
                        {{info.list[4].weather[0].description}}
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
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
                axios
                    .get(this.getApiUrl())
                    .then(response => {
                        this.info = response.data;
                        this.dynamicUrl = response.data.list[0].weather[0].icon;
                    })
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
        height: 400px;
        width: 900px;
    }
    .contentMeteo{
        background-color: #6B6B6B;
        text-align: center;
        color: #FFFFFF;
    }
    .dividerMeteo {
        background-color: #FFFFFF;
        width: 100%
    }
    .nomVilleMeteo {
        font-size: 35px;
        text-align: center;
    }
</style>
