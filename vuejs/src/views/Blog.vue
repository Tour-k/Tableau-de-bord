<template>
  <div class="blog">
    <NavBar></NavBar>
    <h1>Le Blog</h1>  
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/Base/navbar-home"

export default {
  name: 'Blog',
  components: {
    NavBar,
  }
}
</script>