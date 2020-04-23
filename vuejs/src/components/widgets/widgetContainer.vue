<template>
  <v-card raised     
    class="mx-auto"
    max-width="344">
    <v-card-title>{{ widgetTitle }}</v-card-title>
    <v-card-text></v-card-text>
  </v-card>
  
</template>

<script>
export default {
  props: {
    widgetTitle: {
      type: String,
      required: true,
      default: "Widget title"
    }
  }

}
</script>