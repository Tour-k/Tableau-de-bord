<template>
    <div class="d-flex flex-column justify-center align-center">
        <v-avatar id="avatar" color="indigo">
            <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
            <v-card
            class="mx-auto"
            max-width="256"
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">UserName</v-list-item-title>
                <v-list-item-subtitle>Simple description</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

            <v-card-actions>
            <v-btn text>Name</v-btn>
            <v-btn text>Avatar</v-btn>
            </v-card-actions>
        </v-card>
    </div>
    
</template>

<script>
export default {
    name: 'UserParam'
}
</script>

<style lang="scss" scoped>
    #avatar{
        margin-bottom: 5px;
    }
</style>>

