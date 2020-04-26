<template>
  <draggable v-model="myArray">
    <transition-group>
        <div v-for="(element, index) in widgets" :key="index">
            <widgetContainer :widgetId="element.widgetId" :serviceId="element.serviceId" :widgetType="element.widgetId"></widgetContainer>
        </div>
    </transition-group>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
import widgetContainer from '@/components/widgets/widgetContainer' 
export default {
  props: {
    widgets: {
      type: Object,
      required: true,
    }
  },
  components: {
    draggable,
    widgetContainer,
  },
  data () {
    return {
    }
  },

}
</script>