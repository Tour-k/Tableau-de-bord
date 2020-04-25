<template>   
  <v-card
    class="mb-12"
    color="grey lighten-5"
    height="200px"
  >
    <v-card-title>
      Parametrage : {{listeWidgets[serviceId].serviceName}} {{listeWidgets[serviceId].widgets[widgetId].name}}
    </v-card-title>
    <v-row ml-10>
    <v-col>
      Veuillez renseigner les champs suivants pour finir de paramétrer votre widget : {{params}} 
      <v-form>
        <div class="mx-5 itemService">
          <v-text-field
            v-for="(param, index) in listeWidgets[serviceId].widgets[widgetId].params" 
            :key="index"
            outlined
            :v-model="params[index]"
            :name="param.label"
            clearable
            :label="param.label"
          ></v-text-field>
        </div>
        <v-btn class="mr-4" @click="submit" color="primary">submit</v-btn>
      </v-form>
    </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    props: {
      serviceId: {
        type: Number,
        required: true,
        default: 0
      }, 
      widgetId: {
        type: Number,
        required: true,
        default: 0
      }
    }, 
    data () {
      return {
        params: [],
      }
    },
    computed: {
      ...mapState(['listeWidgets'])
    },
    methods: {
      submit() {
        console.log()
        this.$emit('update-widget');
      }
    }
}
</script>

<style>
</style>