<template>
  <v-card raised tile class="mb-5" min-width="800px" 
  >
    <v-card-title class="pa-0 cardTitleWidgetContainer">
      <v-spacer></v-spacer>
        <DeleteWidget :widgetId="widgetId"></DeleteWidget>
    </v-card-title>
    <v-container class="pa-0">
      <div class="meteo" v-if="serviceId == 0">
        <weather v-if="widgetType == 0" :widgetId="widgetId" :params="params"></weather>
        <weather3H v-else-if="widgetType == 1" :widgetId="widgetId" :params="params"></weather3H>
        <weatherDay v-else-if="widgetType == 2" :widgetId="widgetId" :params="params"></weatherDay>
      </div>
      <div class="instagram" v-else-if="serviceId == 1" >
        <instagram v-if="widgetType == 0" :widgetId="widgetId" :params="params"></instagram>
      </div>
      <div class="clock" v-else-if="serviceId == 2">
        <clock v-if="widgetType == 0" :widgetId="widgetId" :params="params"></clock>
      </div>
      <div class="Deezer" v-else-if="serviceId == 3">
        <Deezer v-if="widgetType == 0" :widgetId="widgetId" :params="params"></Deezer>
      </div>
    </v-container>
  </v-card>
  
</template>

<script>
import weather from '@/components/widgets/Weather'
import weather3H from '@/components/widgets/Weather5hours'
import weatherDay from '@/components/widgets/WeatherDays'
import instagram from '@/components/widgets/Instagram'
import clock from '@/components/widgets/Clock'
import DeleteWidget from '@/components/popups/close-widget-popup'
import Deezer from '@/components/widgets/Deezer'

export default {  
  props: {
    serviceId: {
      type: Number,
      required: true,
      default: 0
    },
    widgetType: {
      type: Number,
      required: true,
      default: 0
    },
    widgetId: {
      type: String,
      required: true,
      default: ""
    },
    params: {
      type: Array,
      required: true,
    }
  }, 
  components: {
    weather,
    weather3H,
    weatherDay,
    instagram,
    clock, 
    DeleteWidget,
    Deezer
  }

}
</script>

<style>
.cardTitleWidgetContainer{
  background-color: #1E2544!important;
  color: white;
}
</style>