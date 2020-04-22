<template>
  <div class="home">
    <NavBarHome></NavBarHome>
    <v-container fluid class="pa-0 d-flex justify-center align-center"> 
      <v-img
        src="https://picsum.photos/1920/1080?random"
        :gradient="gradient"
        cover
        class="d-flex align-center">

          <div class="jamboHome">
            <h1 class="ma-2">Bienvenue sur Epiboard</h1> 
            <p>
              <v-icon color="secondary">mdi-fire</v-icon> 
              Le dashboard de toutes vos envies 
              <v-icon color="secondary">mdi-rocket</v-icon> 
            </p>
            <PopupInscription></PopupInscription>
          </div>

      </v-img>
    </v-container>
  </div> 
</template>

<script>
// @ is an alias to /src
import NavBarHome from "@/components/Base/navbar-home";
import PopupInscription from "@/components/popups/inscription-popup" ;
export default {
  name: 'Home',
  components: {
    NavBarHome,
    PopupInscription
  },
  data () {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    }
  }
}
</script>

<style lang="scss">
.jamboHome {
  width: 100%;
  text-align: center;
  color: #FDFDFD;
}
</style>
