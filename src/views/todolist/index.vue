<template>
  <div class="todolist">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>To Do List</h1>
          {{ todolist }}
          {{ user }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'todolist',
  computed: {
    ...mapState(['todolist', 'user'])
  }
};
</script>

<style></style>
