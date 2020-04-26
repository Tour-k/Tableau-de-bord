<template>
  <div>
    <v-app-bar
      app
      flat  
      absolute
      color="#6A76AB"
      dark
      clipped
      shrink-on-scroll
      permanent
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Welcome {{ connected ? $store.state.username  : "Anonyme" }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab router :to="{name: 'Dash1', params: {id: $store.state.userId}}">Dashboard 1</v-tab>
          <v-tab router :to="{name: 'Dash2', params: {id: $store.state.userId}}">Dashboard 2</v-tab>
          <v-tab router :to="{name: 'Dash3', params: {id: $store.state.userId}}">Dashboard 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        left
        temporary
      >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar v-if="connected">
            <img :src=userAvatar>
          </v-list-item-avatar>
          <v-list-item-avatar v-else>
            <img :src=randomAnonymusPicture>
          </v-list-item-avatar>

          <v-list-item-content>
            
            <v-list-item-title>{{ connected ? $store.state.username : "Anonyme" }}</v-list-item-title>
            <v-list-item-subtitle v-if="connected">Connecté</v-list-item-subtitle>
            <v-list-item-subtitle v-else><v-btn>Connecte toi !</v-btn></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in sideMenuItems"
          :key="item.title"
          router
          :to="{name: item.routeName}"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item           
          router
          :to="{name: 'Dash1', params:{id: $store.state.userId}}">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <AddWidgetPopup v-on:close-side-menu="closeSideMenu">
              </AddWidgetPopup>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
    >
      <v-container class="contentDashboard">
        <slot name="content"></slot>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import AddWidgetPopup from '@/components/popups/addWidget/addWidgets'
  export default {
    components: {
      AddWidgetPopup
    },
    props: {
      // username: {
      //   type: String,
      //   required: true,
      //   default: "John",
      // }, 
      userAvatar: {
        type: String,
        required: true,
        default: "https://randomuser.me/api/portraits/men/96.jpg"
      },
      connected: {
        type: Boolean,
        required: true,
        default: true
      }
    },
    computed: {
      randomAnonymusPicture() {
        let randomNbr = Math.floor(Math.random() * 10);
        return "https://randomuser.me/api/portraits/lego/" + randomNbr + ".jpg";
      }
    },
    data: () => ({
      drawer: false,
      group: null,
      sideMenuItems: [
        { title: 'Home', icon: 'mdi-home', routeName:'Home'},
        { title: 'My Account', icon: 'mdi-account', routeName:"MyAccount" },
      ],

    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      closeSideMenu() {
        this.drawer = false
      }
    }
  }
</script>

<style lang="scss">
.contentDashboard {
  margin-top: 212px;
  padding-top: 20px;
}
</style>