<template>
  <div>
    <button @click="showUserInfo()">Click</button>
    <p>username: {{user.username}}</p>
    <p>email: {{user.email}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    showUserInfo() {
      axios.get('http://localhost:3000/users/592f7f394e4c6d51648faa41')
        .then(response => {
          this.user = response.data;
          console.log(this.user)
        })
    }
  }
}
</script>