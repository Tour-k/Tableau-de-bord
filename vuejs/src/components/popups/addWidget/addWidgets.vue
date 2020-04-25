<template>
  <div class="d-inline">
    <v-dialog v-model="dialog" persistent max-width="1020px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" :class="$style.btnCallToAction">Ajouter un widget</v-btn>
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

      <v-stepper-step  :complete="e1 > 3" step="3">Paramétrer mon widget</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="4">Félicitations ! </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" >
        <Step1 v-on:update-service="updateService"></Step1>
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
        <Step3 :serviceId="serviceId" :widgetId="widgetId" v-on:update-params="updateParams"></Step3>
        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

        <v-btn text @click="cancelStep3()">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <template>   
          <v-card
            class="mb-12"
            color="grey lighten-5"
            height="200px"
          >
            <v-card-title>
              Félicitation 
            </v-card-title>
            <v-card-text>
              <v-img src="@/assets/bravo.jpg" ></v-img>
            </v-card-text>
          </v-card>
        </template>
        <v-btn
          color="primary"
        >
          Sauvegarder
        </v-btn>

        <v-btn text @click="cancelStep4()">Cancel</v-btn>
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
      params: [],
      errors:[]
    }),
    methods: {
      sendReq() {
        console.log("TestSendReq");
      },
      updateService(e){
        this.serviceId = e;
      },
      updateWidget(e){
        this.widgetId = e;
      },
      updateParams(e) {
        this.params.push(e);
      },
      cancelStep1() {
          this.dialog = false;
      },
      cancelStep2() {
          this.e1 = 1;
          this.widgetId = null;
      },
      cancelStep3() {
          this.e1 = 2;
          this.params = null;
      },
      cancelStep4() {
          this.e1 = 3;
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