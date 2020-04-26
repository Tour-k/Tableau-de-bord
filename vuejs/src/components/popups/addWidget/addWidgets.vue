<template>
  <div class="d-inline">
    <v-dialog v-model="dialog" persistent max-width="1020px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" :class="$style.btnCallToAction" :disabled="$store.state.userId == ''">Ajouter un widget</v-btn>
      </template>
      <v-card>
      <v-row class="d-flex justify-end mr-3 pr-0 pt-3">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
        <v-card-title>
          <span class="headline">Ajouter un widget : </span>
        </v-card-title>
          <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Choisir un service</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Choisir un widget</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step  :complete="e1 > 3" step="3">Choisir un dashboard</v-stepper-step>
      <v-divider></v-divider>
     </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" >
        <Step1 :serviceSelected="serviceId" v-on:update-service="updateService"></Step1>
        <v-btn
          color="primary"
          @click="e1 = 2"
          :disabled="serviceId == null"
        >
          Continue
        </v-btn>

        <v-btn text @click="cancelStep1()">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <Step2 :serviceId="serviceId" :widgetSelected="widgetId" v-on:update-widget="updateWidget"></Step2>
        <v-btn
          color="primary"
          @click="e1 = 3"
          :disabled="widgetId == null"
        >
          Continue
        </v-btn>

        <v-btn text @click="cancelStep2()">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <Step3 :dashboardtSelected="dashboardId" v-on:update-dashboard-id="updateDashboardId"></Step3>
        <v-btn
          color="primary"
          @click="setWidget()"
          :disabled="dashboardId == null"
        >
          Sauvegarder
        </v-btn>

        <v-btn text @click="cancelStep3()">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Step1 from "@/components/popups/addWidget/step1";
import Step2 from "@/components/popups/addWidget/step2";
import Step3 from "@/components/popups/addWidget/step3";
import { mapState } from 'vuex'
import axios from 'axios';
import store from '../../../store/index.js';

  export default {
    components: {
      Step1,
      Step2,
      Step3
    },
    data: () => ({
      dialog: false,
      e1: 1,
      serviceId : null,
      widgetId: null,
      dashboardId: null,
      params: [],
      errors:[]
    }),
    methods: {
      
      setWidget() {
        console.log("setWidget");
        console.log("Service id : " + this.serviceId);
        console.log("Widget id : " + this.widgetId);
        console.log("Dashboard id : " + this.dashboardId);
        console.log("User Id : " + this.$store.state.userId);
        
        axios({
          method: 'post',
          url: 'http://localhost:3000/widget/setWidget',
          headers:{'Authorization' : `Basic ${store.state.token}`},
          data: {
            name: 'default',
            userId: store.state.userId, 
            refresh: 3000,
            numDashboard: this.dashboardId,
            hidden: false,
            serviceId: this.serviceId,
            widgetId: this.widgetId
          }
        })
        .then(function (response) {
          console.log('response set : ' + response);

        }).finally(reponse => {
          console.log('Finally : ' +reponse)
          this.dashboardId =null;
          this.serviceId = null;
          this.widgetId = null;
          this.dialog = false;
          this.e1 = 1;
          this.$emit('close-side-menu');
        });
      },
      updateService(e){
        this.serviceId = e;
      },
      updateWidget(e){
        this.widgetId = e;
      },
      updateDashboardId(e) {
        this.dashboardId = e;
      },
      cancelStep1() {
          this.serviceId = null;
          this.dialog = false;
      },
      cancelStep2() {
          this.e1 = 1;
          this.widgetId = null;
      },
      cancelStep3() {
          this.e1 = 2;
          this.dashboardId = null;
      },
    },
    computed: {
      ...mapState(['listeWidgets'])
    } 

  }
</script>

<style lang="scss" module>
  .btnCallToAction {
    text-transform: capitalize;
  }

</style>