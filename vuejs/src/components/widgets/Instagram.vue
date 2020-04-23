<template>
    <v-container>
      <h1>Instagram Widget</h1>
      <p>User Name : {{ instaDatas.full_name }}</p>
      <p>User Description : {{ instaDatas.description }}</p>
      <p>Fallowers : {{instaDatas.followers}}</p>
      <p>Comments : {{instaDatas.comments}}</p>
      <p>engagement : {{instaDatas.engagement}}</p>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
        name: 'difractomusique',
        url: 'http://localhost:3000/callExternAPI/insta/',
        instaDatas: {}
    }
  },
  methods: {
    setURL(){
      return  this.url + this.name + '/';
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: this.setURL(),
    })
    .then(response => {
      this.instaDatas = response.data;
    })
      
  }
}
</script>

<style scoped>

</style>