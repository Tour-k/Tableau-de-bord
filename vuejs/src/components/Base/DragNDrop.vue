<template>
  <draggable v-model="myArray">
    <transition-group>
        <div v-for="element in myArray" :key="element.id">
            <widget :widgetTitle="element.name"></widget>
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
          id: 0, name: "widget1"
        },
        {
          id: 1, name: "widget2"
        },
        {
          id: 2, name: "widget3"
        },
        {
          id: 1, name: "widget4"
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