<template>   
  <v-card
    class="mb-12"
    color="grey lighten-5"
    height="200px"
  >
    <v-card-title>
      Selectionnez un service : {{ afficheServiceName }}
    </v-card-title>
    <v-row ml-10>
    <v-col class="d-flex">
      <div class="mx-5 itemService" v-for="(service, index) in listeWidgets" :key="index" @click="selecteService(service.id)">
        <v-avatar :color="isActive(service.id)" size="62" class="avatarService" >
            <v-icon>{{ service.serviceIcon }}</v-icon> 
        </v-avatar>
        <p>{{service.serviceName}}</p>
      </div>
    </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data () {
      return {
        serviceSelected: null,
      }
    },
    methods: {
      selecteService(index){
        this.serviceSelected = index;
        this.$emit('update-service', index);
      },
      isActive(index){
        if (index == this.serviceSelected) {
          return 'secondary';
        } else {
          return 'primary';
        }
      }
    },
    computed: {
      ...mapState(['listeWidgets']),
      afficheServiceName() {
        if (this.serviceSelected == null) {
          return '';
        } else {
          return this.listeWidgets[this.serviceSelected].serviceName;
        }
      }
    }

  }
</script>

<style>
.avatarService {
  border-radius: 50%!important;
}

.itemService{
  cursor: pointer;
  text-align: center;
  min-width: 200px;
}
</style>