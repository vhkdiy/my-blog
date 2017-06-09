<template>
  <header>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="../assets/logo.png" alt="Bulma logo">
          </a>
        </div>
      </div>
    </nav>
  
    <div class="banner">
  
    </div>
  
    <!--<button @click="showUserInfo()">Click</button>
      <p>username: {{user.username}}</p>
      <p>email: {{user.email}}</p>-->
  </header>
</template>

<script>
import axios from 'axios';
import 'bulma/css/bulma.css';

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

<style>
.banner {
  height: 450px;
  background: url('../assets/blog-banner.jpg') center/cover;
}
</style>
