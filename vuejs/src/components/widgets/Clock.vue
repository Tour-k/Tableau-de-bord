<template>
    <v-card raised title class="cardHorloge">
            <v-container>
                <v-card-title>
                    <h1 class="headerHorloge">
                        Horloge
                    </h1>
                    <v-spacer></v-spacer>
                    <v-icon @click.stop="drawer = !drawer" class="headerWeather">mdi-cog</v-icon>
                </v-card-title>
            </v-container>
                <v-divider class="dividerMeteo"></v-divider>
            <v-container>
                <p> {{ info.timezone }} </p>
                <p> {{ info.datetime.slice(11,16)}} </p>
                <p> {{ info.week_number }} </p>
                <p> {{ info.abbreviation }} </p>
                <p> {{ info.utc_offset }}</p>
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
            <h2 class="mb-8">Parametrage du widget horloge</h2>

            <p class="mb-0">Indiquez le continent et la ville : </p>
            <v-form>
                <v-row>
                        <v-text-field
                                label="continent*"
                                placeholder="Entrez un continent"
                                outlined
                                v-model="params[0]"
                                class="text-fieldMeteo"
                        ></v-text-field>
                        <v-text-field
                                label="city*"
                                placeholder="Entrez une ville"
                                outlined
                                v-model="params[1]"
                                class="text-fieldMeteo"
                        ></v-text-field>
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
        name: "Clock",
        props: {
            params: {
                type: Array,
                required: true,
                default: function () {
                    return ["Europe", "Paris"]
                }
            },
            widgetId: {
                type: String
            }
        },
        data () {
        return {
                info: null,
                continent:"Europe",
                city: "Paris",
                drawer: false,
            }
        },
        computed: {
            defaultParam() {
                let arrRes = [];
                if (this.params.length == 0) {
                    arrRes = ["Europe", "Paris"];
                } else {
                    arrRes = this.params
                }
                return arrRes
            }
        },
        methods: {
            getApiUrl() {
                return 'http://worldtimeapi.org/api/timezone/'+ this.defaultParam[0]+'/'+this.defaultParam[1];
            },
            submitApi() {
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/widget/updateWidget',
                    headers:{'Authorization' : `Basic {$store.state.token}`},
                    data: {
                        widgetId: this.widgetId, 
                        params: [this.defaultParam[0], this.defaultParam[1]]
                        }
                })
                .then(response => {
                    console.log(response.data.message);  
                    axios
                    .get(this.getApiUrl())
                    .then(response => {
                        this.info = response.data;
                    })
                });
                
            },
        },
        mounted () {
            axios
                .get(this.getApiUrl())
                .then(response => {
                    this.info = response.data;
                })
        }
    }
</script>

<style>
.cardHorloge {
    min-width: 800px;
}
</style>
