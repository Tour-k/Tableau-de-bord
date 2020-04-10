<template>
  <div class="d-inline">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" :class="$style.btnCallToAction">Se connecter</v-btn>
      </template>
      <v-card>
      <v-row class="d-flex justify-end mr-3 pr-0 pt-3">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
        <v-card-title>
          <span class="headline">Connexion</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Se connecter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

<style lang="scss" module>
  .btnCallToAction {
    text-transform: capitalize;
  }

</style>