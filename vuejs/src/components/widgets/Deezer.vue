<template>
    <v-card>
        <v-container>
            <v-card-title>
                <h1 class="headerWeather">
                    Deezer
                </h1>
                <v-spacer></v-spacer>
                <v-icon @click.stop="drawer = !drawer">mdi-cog</v-icon>
            </v-card-title>
            <div v-for="album in infos.data" v-bind:key="album.id">
                {{ album.id }} - {{album.title}} - <vue-audio :file="getSong(album.preview)" />

            </div>
        </v-container>
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
            <h2 class="mb-8">Parametrage du widget Deezer </h2>

            <p class="mb-0">Recevoir une selection de la musique de votre artiste : </p>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field
                                label="artist*"
                                placeholder="Entrez un artiste"
                                v-model="params[0]"
                                outlined
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
    import VueAudio from 'vue-audio';

    export default {
        name: "Deezer",
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
        computed: {
            defaultParam() {
                let arrRes = [];
                if (this.params.length == 0) {
                    arrRes = ["Metallica"];
                } else {
                    arrRes = this.params
                }
                return arrRes
            }
        },
        components: {
            'vue-audio': VueAudio
        },
        data () {
           return {
               infos : null,
               artist: "Metallica",
               drawer: false,
               file1: ''
           }
        },
        methods: {
            getSong(preview) {
                 return preview;
            },
            getApiUrl() {
                return 'https://deezerdevs-deezer.p.rapidapi.com/search?q='+this.defaultParam[0]+''
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
                    axios({
                        headers: {
                            'X-RapidAPI-Key':'d97bd38141msh8106942cb097e99p189259jsn2dc70d9145cf'
                        },
                        method: 'GET',
                        url: this.getApiUrl(),
                    })
                    .then(response => {
                        this.infos = response.data;
                        this.drawer = false;
                    })
                });
            },
        },
        mounted () {
            axios({
                headers: {
                    'X-RapidAPI-Key':'d97bd38141msh8106942cb097e99p189259jsn2dc70d9145cf'
                },
                method: 'GET',
                url: this.getApiUrl(),
            })
                .then(response => {
                    this.infos = response.data;
                })
        },
    }
</script>

<style scoped>

</style>
