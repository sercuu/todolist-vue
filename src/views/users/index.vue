<template>
  <div class="users mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4"><h1>User List</h1></div>
        <div class="col-4" v-for="user in users.userlist.data" :key="user.id">
          <div class="users__list">
            <div class="users__list__image">
              <img v-bind:src="user.avatar" v-bind:alt="user.avatar" />
            </div>
            <div class="users__list__content">
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
import { mapGetters, mapActions } from 'vuex';
//
export default {
  name: 'Users',
  computed: {
    ...mapGetters(['alluserlist'])
  },
  methods: {
    ...mapActions(['fetchUserList'])
  },
  created() {
    this.fetchUserList();
  }
};
</script>
