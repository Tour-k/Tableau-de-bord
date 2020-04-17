<template>
  <div class="d-inline">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary white--text" dark v-on="on" :class="$style.btnCallToAction">S'inscrire</v-btn>
      </template>
      <v-card>
      <v-row class="d-flex justify-end mr-3 pr-0 pt-3">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
        <v-card-title>
          <span class="headline">Inscription</span>
        </v-card-title>
        <v-card-text>
          <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Username*" required v-model="username"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required v-model="email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
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
          <v-btn color="primary" @click="sendSignupReq()">S'inscrire</v-btn>
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
      username: null,
      email: null,
      password: null,
      errors:[],
      errorStatus: false
    }),
    methods: {
      sendSignupReq() {
        this.errors= [];
        this.errorStatus = false;
        axios.post('http://localhost:3000/api/auth/signup',  {
          email: this.email,
          password: this.password,
          username: this.username
        })
        .then(response => {
          console.log(response.data);
          this.$store.dispatch('setUsername', response.data.username)
          this.$store.dispatch('setTocken', response.data.token)
          this.$store.dispatch('setUserId', response.data.userId)
          VueCookie.set('userId', response.data.userId);
          VueCookie.set('token', response.data.token)
          this.$router.push('Dashboard/' +response.data.userId);
        })
        .catch(e => {
          this.errors.push(e)
          this.errorStatus = true;
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