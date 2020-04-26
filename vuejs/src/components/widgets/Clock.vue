<template>
    <v-card raised tile>
            <v-container>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-text-field
                                        label="continent*"
                                        placeholder="Entrez un continent"
                                        outlined
                                        v-model="continent"
                                        class="text-fieldMeteo"
                            ></v-text-field>
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
                <!--
                <p> {{ info.timezone }} </p>
                <p> {{info.datetime }} </p>
                <p> {{ info.week_number }} </p>
                <p> {{ info.abbreviation }} </p>
                <p> {{ info.utc_offset }}</p>
                -->
            </v-container>
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
                continent:"Europe",
                city: "Paris",
            }
        },
        computed: {
            defaultParam() {
                let arrRes = "";
                if (this.params.length == 0) {
                    arrRes = ["Paris"];
                } else {
                    arrRes = this.params
                }
                return arrRes
            }
        },
        methods: {
            getApiUrl() {
                return 'http://worldtimeapi.org/api/timezone/Asia/Tokyo'
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

<style scoped>

</style>
