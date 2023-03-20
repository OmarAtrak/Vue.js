<template>
  <div>
    <!--before using store-->
    <!-- <headerComponent/> -->
    <!-- <addTasks @doneTask="ListdoneTasks.push($event)" />
    <DoneTasks :DoneTasks="ListdoneTasks" /> -->

    <!--after using store-->
    <addTasks/>
    <DoneTasks/>
  </div>

  <!--for testing count from store-->
  <h3>{{ store.state.counter }}</h3>
  <button @click="store.state.counter--">Decrement</button>
</template>

<script lang="ts">
import { getTransitionRawChildren } from "vue";
// import headerComponent from '../../components/';
import addTasks from "./AddTask.vue";
import DoneTasks from "./DoneTasks.vue";

// for using TacheStrore
import store from '../store/TacheStore'

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    // headerComponent,
    addTasks,
    DoneTasks,
  },
  mounted() {},
};
</script>

<style>
AjouterTask {
  margin-top: 50px;
}
</style>
