<template>
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="list in Lists" :key="list.id">
          <div class="list__item">
            <h4>{{ list.title }}</h4>
            <div>{{ moment(list.startDate).format('DD.MM.YYYY') }} - {{ moment(list.endDate).format('DD.MM.YYYY') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "toDoList",
  props: ["Lists"],
  methods: {
    moment: function() {
      return moment();
    }
  }
};
</script>
