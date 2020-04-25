<template>   
  <v-card
    class="mb-12"
    color="grey lighten-5"
    height="200px"
  >
    <v-card-title>
      Sur quelle dashboard voulez-vous épingler ce widget ? 
    </v-card-title>
    <v-row ml-10>
    <v-col class="d-flex">
      <div class="mx-5 itemService" v-for="(n, index) in 3" :key="n" @click="selecteDashboard(index)">
        <v-avatar :color="isActive(index)" size="62" class="avatarService" >
            <span class="white--text headline">{{ n }}</span>
        </v-avatar>
        <p>Dashboard {{n}}</p>
      </div>
    </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    props: {
      dashboardtSelected: {
        type: Number,
        required: true,
        default: 1
      }
    },
    methods: {
      selecteDashboard(index) {
        this.dashboardtSelected = index;
        this.$emit('update-dashboard-id', index);
      },
      isActive(index){
        if (index == this.dashboardtSelected) {
          return 'secondary';
        } else {
          return 'primary';
        }
      }
    },
}
</script>

<style>
</style>