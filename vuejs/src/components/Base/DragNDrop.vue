<template>
  <draggable v-model="myArray">
    <transition-group>
        <div v-for="element in myArray" :key="element.id">
            <widgetContainer :widgetId="element.widgetId" :serviceId="element.serviceId" :widgetType="element.widgetType"></widgetContainer>
        </div>
    </transition-group>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
import widgetContainer from '@/components/widgets/widgetContainer' 
export default {
  components: {
    draggable,
    widgetContainer,
  },
  data () {
    return {
      myArray: [
        {
          id: 0, serviceId: 0, widgetType: 1, widgetId:"testUniqueID"
        },
        {
          id: 1, serviceId: 1, widgetType: 0,  widgetId:"testUniqueID"
        },
        {
          id: 2, serviceId: 2, widgetType: 0,  widgetId:"testUniqueID"
        },
        {
          id: 0, serviceId: 0, widgetType: 0
        },
      ]
    }
  },
  computed: {

  }

}
</script>