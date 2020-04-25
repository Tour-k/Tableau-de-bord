<template>   
  <v-card
    class="mb-12"
    color="grey lighten-5"
    height="200px"
  >
    <v-card-title>
      Selectionnez un widget : {{ afficheServiceName }} {{ afficheWidgetName }}
    </v-card-title>
    <v-row ml-10>
    <v-col class="d-flex">
      <div class="mx-5 itemService" v-for="(widget, index) in listeWidgets[serviceId].widgets" :key="index" @click="selecteWidget(widget.id)">
        <v-avatar :color="isActive(widget.id)" size="62" class="avatarService" >
            <v-icon>{{ widget.icon }}</v-icon> 
        </v-avatar>
        <p>{{widget.name}}</p>
      </div>
    </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    props: {
      serviceId: {
        type: Number,
        required: true,
        default: null
      },
      widgetSelected: {
        type: Number,
        required: true,
        default: null
      }
    }, 
    computed: {
      ...mapState(['listeWidgets']),
      afficheServiceName() {
        if (this.serviceId == null) {
          return '';
        } else {
          return this.listeWidgets[this.serviceId].serviceName;
        }
      },
      afficheWidgetName() {
        if (this.widgetSelected == null) {
          return '';
        } else {
          return this.listeWidgets[this.serviceId].widgets[this.widgetSelected].name;
        }
      }      
    },
    methods: {
      selecteWidget(index) {
        this.widgetSelected = index;
        this.$emit('update-widget', index);
      },
      isActive(index){
        if (index == this.widgetSelected) {
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