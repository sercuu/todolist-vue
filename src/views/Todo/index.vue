<template>
  <div class="todo mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>To Do</h1>
          <AddTodo :handileSubmit="handileSubmit" />
          <TodoList :Lists="todolist" :handleDelete="handleDelete" />
          <div class="empty" v-if="todolist.length === 0">YAPILCAK IS YOK &#127829;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "../../components/todo/add";
import TodoList from "../../components/todo/list";

export default {
  name: "todolist",
  components: { AddTodo, TodoList },
  methods: {
    ...mapActions(["handleAddTodo", "getLocalStroge", "deleteTodoById"]),
    handileSubmit(val) {
      this.handleAddTodo(val);
    },
    handleDelete(id) {
      this.deleteTodoById(id);
    }
  },
  computed: {
    ...mapGetters(["todolist"])
  },
  created() {
    this.getLocalStroge();
  }
};
</script>
