<template>
  <draggable v-model="myArray">
    <transition-group>
        <div v-for="element in myArray" :key="element.id">
            <widget :serviceId="element.serviceId" :widgetType="element.widgetType"></widget>
        </div>
    </transition-group>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
import widget from '@/components/widgets/widgetContainer' 
export default {
  components: {
    draggable,
    widget,
  },
  data () {
    return {
      myArray: [
        {
          id: 0, serviceId: 0, widgetType: 1
        },
        {
          id: 1, serviceId: 1, widgetType: 0
        },
        {
          id: 2, serviceId: 2, widgetType: 0
        },
        {
          id: 0, serviceId: 0, widgetType: 0
        },
      ]
    }
  },
  computed: {
    weather() {
      let arrayWeathter = [];
      this.myArray.forEach(element => {
        if(element.name == "weather") {
          arrayWeathter.push(element)
        }
      })
      console.log(arrayWeathter)
      return arrayWeathter;
    },
    insta() {
      let arrayWeathter = [];
      this.myArray.forEach(element => {
        if(element.name == "insta") {
          arrayWeathter.push(element)
        }
      })
      console.log(arrayWeathter)
      return arrayWeathter;
    }
  }

}
</script>