<template>
<div class="mx-auto">
  <div v-if="state == 'loading'">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <div v-else>
  <draggable v-model="myArray" v-if="!isEmpty">
    <transition-group>
        <div v-for="(element, index) in widgets" :key="index">
            <widgetContainer :widgetId="element.widgetId" :serviceId="element.serviceId" :widgetType="element.widgetId"></widgetContainer>
        </div>
    </transition-group>
  </draggable>
  <div v-else>
    <h2>Ce dashboard est un peu vide !!</h2>
    <addWidget></addWidget>
  </div>
  </div>
</div>
</template>
<script>
import draggable from 'vuedraggable'
import addWidget from '@/components/popups/addWidget/addWidgets'
import widgetContainer from '@/components/widgets/widgetContainer' 
export default {
  props: {
    widgets: {
      type: Array,
      required: true,
    },
    state: {
      type: String,
      required: true
    }
  },
  components: {
    draggable,
    widgetContainer,
    addWidget
    
  },
  data () {
    return {
    }
  },
  computed: {
    isEmpty() {
      if (this.widgets.length == 0 && this.state != "loading") {
        return true;
      } else {
        return false;
      }
    }
  }

}
</script>