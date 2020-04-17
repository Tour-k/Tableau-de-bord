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
          <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" required v-model="email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required v-model="password" autocomplete></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          </v-form>
            <ul v-if="errors && errors.length">
              <li v-for="(error, index) of errors" :key="index">
                {{error.message}}
              </li>
            </ul>
          <small>*indicates required field</small>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="sendConnectReq()">Se connecter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import VueCookie from 'vue-cookies';

  export default {
    data: () => ({
      dialog: false,
      email: null,
      password: null,
      errors:[]
    }),
    methods: {
      sendConnectReq() {
        axios.post('http://localhost:3001/api/auth/login',  {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
          VueCookie.set('userId', response.data.userId);
          VueCookie.set('token', response.data.token)
          this.$router.push('Dashboard/'+response.data.userId)
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  }
</script>

<style lang="scss" module>
  .btnCallToAction {
    text-transform: capitalize;
  }

</style>