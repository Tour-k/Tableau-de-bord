<template>
  <div>
    <h1>Dash 1 </h1>
    {{$store.state.email}}
    <Insta></Insta>
    <Weather></Weather>
    <Weather5hours></Weather5hours>
  </div>
</template>

<script>
import Insta from "@/components/widgets/Instagram"
import Weather from "@/components/widgets/Weather"
import Weather5hours from "@/components/widgets/Weather5hours"

export default {
  components: {
    Insta,
    Weather,
    Weather5hours
  }
}
</script>