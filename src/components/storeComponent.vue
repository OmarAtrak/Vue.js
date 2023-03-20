<template>
  <div class="container">
    <h3>{{ store.state.counter }}</h3>
    <button class="btn btn-secondary" @click="store.state.counter++">Increment</button>
    <br />
    <br />
    <h1>Les Tâches pas Terminées</h1>
    <div
      class="container"
      v-for="task in store.state.tasks"
      :key="task.Description"
    >
      <p>{{ task.Description }}</p>
      <p>{{ task.Date }}</p>
      <p>{{ task.Status }}</p>
      <hr />
    </div>
    <br />
    <br />
    <h1>Les Tâches qui Terminées</h1>
    <div
      class="container"
      v-for="task in store.state.DoneTasks"
      :key="task.Description"
    >
      <p>{{ task.Description }}</p>
      <p>{{ task.Date }}</p>
      <p>{{ task.Status }}</p>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import store from "../Tache/store/TacheStore";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>
