<template>
  <div>
    <h1>Dash 1 </h1>
    {{$store.state.email}}
    <Insta></Insta>
  </div>
</template>

<script>
import Insta from "@/components/widgets/Instagram"
export default {
  components: {
    Insta
  }
}
</script>