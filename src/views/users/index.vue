<template>
  <div class="users mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4"><h1>User List</h1></div>

        <div class="col-4" v-for="user in users" :key="user.id">
          <div class="users__list">
            <div class="users__list__image">
              <img v-bind:src="user.avatar" v-bind:alt="user.avatar" />
            </div>
            <div class="users__list__content">
              <!-- <p>{{ user.id }}</p> -->
              <p class="pt-1">{{ user.first_name }} {{ user.last_name }}</p>
              <p>{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//
export default {
  name: 'Users',
  data() {
    return {
      users: null
    };
  },
  mounted() {
    axios.get('https://reqres.in/api/users?page=1').then(response => {
      return (this.users = response.data.data);
    });
  }
};
</script>
