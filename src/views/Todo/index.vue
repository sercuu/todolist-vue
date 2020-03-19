<template>
  <div class="todo mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>To Do</h1>
          <AddTodo />
          <TodoList :list="list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddTodo from '../../components/todo/add';
import TodoList from '../../components/todo/list';

export default {
  name: 'todolist',
  components: { AddTodo, TodoList },
  data: function() {
    return {
      list: [
        {
          title: 'title',
          desc: 'desc'
        },
        {
          title: 'title1',
          desc: 'desc'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['todolist'])
  }
};
</script>
