<template>
  <div class="todo mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>To Do</h1>
          <AddTodo :handileSubmit="handileSubmit" />
          <TodoList :Lists="todolist" />
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
    ...mapActions(["handleAddTodo", "getLocalStroge"]),
    handileSubmit(val) {
      this.handleAddTodo(val);
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
