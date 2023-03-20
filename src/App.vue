<template>
  <div>
    <nav
      style="color: white"
      class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <h4 class="mx-auto">
        <RouterLink to="/AddTask" style="color: white; text-decoration: none"
          >Ajouter une Tâche</RouterLink
        >
      </h4>
      <h4 class="mx-auto">
        <RouterLink to="/" style="color: white; text-decoration: none"
          >Liste des Tâches</RouterLink
        >
      </h4>
      <h4 class="mx-auto">
        <RouterLink to="/DoneTasks" style="color: white; text-decoration: none"
          >Les Tâches Terminées</RouterLink
        >
      </h4>
      <h4 class="mx-auto">
        <RouterLink to="/TestStore" style="color: white; text-decoration: none"
          >Test Store</RouterLink
        >
      </h4>
      <h4 class="mx-auto">
        <RouterLink to="/Refs" style="color: white; text-decoration: none"
          >Refs</RouterLink
        >
      </h4>
      <h4 class="mx-auto">
        <RouterLink to="/Validation" style="color: white; text-decoration: none"
          >Validation</RouterLink
        >
      </h4>
      <h4 class="mx-auto">
        <RouterLink to="/simpleTypeAhead" style="color: white; text-decoration: none"
          >Simple-Typeahead</RouterLink
        >
      </h4>
    </nav>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { createApp } from "vue";
import Tache from "./Tache/model/Tache";
import TacheService from "./Tache/service/TacheService";

export default {
  mounted() {
    // console.log(this.tache.Description);
    // console.log(this.tache.Date);
    // console.log(this.tache.Status);
    // TacheService.ajouter(tache);
  },
};
</script>
