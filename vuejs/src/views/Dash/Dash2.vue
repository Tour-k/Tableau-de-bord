<template>
  <div id="dash2">
    <DragNDrop></DragNDrop>
  </div>
</template>

<script>
import DragNDrop from "@/components/Base/drag-and-drop";

export default {
  name: "app",
  components: {
    DragNDrop
  }
};
</script>

<style>
#dash2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#dash2 .logo {
  text-align: center;
}
</style>
