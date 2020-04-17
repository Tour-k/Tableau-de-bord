<template>
    <v-content>
        <v-container>
            <h1> widget météo </h1>
            <div class="input">
                {{ city }}
                <v-form>
                    <v-text-field label="city*" required v-model="city"></v-text-field>
                    <v-btn text @click="submitApi()" > submit </v-btn>
                </v-form>
            </div>
        </v-container>
        <v-container>
            <ol> <v-img :src="getUrl()" height="50px" width="50px"/> </ol>
            <ol> La ville est {{ info.name }}. </ol>
            <ol> Aujourd'hui sera un temps {{ info.weather[0].main }} soit {{ info.weather[0].description }} </ol>
            <ol> La température actuelle est de {{ info.main.temp }} ° </ol>
            <ol> La maximale sera de {{ info.main.temp_max }} et la minimale sera de {{ info.main.temp_min }}</ol>
            <ol> La pression atmosphérique est actuelle de {{ info.main.pressure }}</ol>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "weather",
        components: {

        },
        data () {
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

</style>
