<template>
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="list in Lists" :key="list.id">
          <div class="list__item">
            <h4>{{ list.title }}</h4>
            <div>{{ moment(list.startDate) }} - {{ moment(list.endDate) }}</div>
            <div class="list__item__delete">
              <button type="button" @click="handleDelete(list.id)">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'toDoList',
  props: {
    Lists: Array,
    handleDelete: Function
  },
  methods: {
    moment: function(e) {
      return moment(e).format('DD.MM.YYYY');
    }
  }
};
</script>
