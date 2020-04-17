<template>
    <div>
        <v-app-bar
            height="95px"
        >
            <v-toolbar-title>
                <v-row>
                    <v-col :class="$style.brandTitle">
                        <h1>Epiboard</h1>
                        <p>Votre dashboard</p>
                    </v-col>
                </v-row>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div v-if="$vuetify.breakpoint.smAndDown">
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                    v-on="on"
                    icon
                    >
                        <v-icon large color="primary">mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list class="px-3">
                    <v-list-item
                    v-for="(item, index) in navItems"
                    :key="index"
                    router
                    :to="item.route"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    <div>
                        <PopupConnexion></PopupConnexion>
                    </div>
                    <div>
                        <PopupInscription></PopupInscription>
                    </div>
                </v-list>
                </v-menu>
            </div>
            <div v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn text v-for="navItem in navItems" :key="navItem.id" 
                :class="$style.navLink"
                router
                :to="navItem.route">
                    {{navItem.title}}
                </v-btn>
                <PopupConnexion></PopupConnexion>
                <PopupInscription></PopupInscription>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
import PopupInscription from "@/components/popups/inscription-popup"
import PopupConnexion from "@/components/popups/connexion-popup"
export default {
    components: {
        PopupInscription,
        PopupConnexion
    },
    data () {
        return {
            navItems: [
                { id: 0, title: "Explorer", route: "/dashboard/annonyme" },
                { id: 1, title: "Blog", route: "/blog" },
            ],
        }
    }
}
</script>


<style lang="scss" module>
    @import "@/style";
    .brandTitle{
        color: $color-font-main;
    }
    
    .navLink{
        text-transform: capitalize;
    }

</style>