import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#97C727",
                secondary: "#EF6D5F",
                accent: colors.purple,
                error: colors.red.accent3,
            },
            dark: {
                primary: "#97C727",
            },
        },
    },
});
