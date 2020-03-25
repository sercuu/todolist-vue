<template>
  <div class="addTodo">
    <form @submit="onSubmit">
      <div class="addTodo__input">
        <label>Title</label>
        <input
          type="text"
          name="addtodo"
          v-model="todoVal"
          autocomplete="off"
        />
      </div>
      <div>
        <label>Start Date</label>
        <Datepicker :value="startDate" v-model="startDate" name="startDate" />
      </div>
      <div>
        <label>End Date</label>
        <Datepicker :value="endDate" name="endDate" v-model="endDate" />
      </div>
      <div class="addTodo__button">
        <button type="submit">ADD</button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import uid from 'uid';

export default {
  name: 'addTodo',
  props: {
    handileSubmit: Function
  },
  components: { Datepicker },
  data() {
    return {
      todoVal: '',
      startDate: new Date(),
      endDate: new Date()
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const todo = {
        id: uid(),
        title: this.todoVal,
        startDate: this.startDate,
        endDate: this.endDate
      };
      this.handileSubmit(todo);
    }
  }
};
</script>
