<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-md-10 mx-auto">
        <div class="card">
          <div class="card-header">
            <form class="form-inline my-2 my-lg-0 mx-auto">
              <input class="form-control mr-sm-2" placeholder="Ajouter une Tâche"
                style="width: 70%; float: left; margin-right: 8px" v-model="taskValue.Description" />
              <input class="btn btn-primary my-2 my-sm-0 float-left" type="button"
                @click="tasks.push(taskValue), taskValue.Description = ''" value="Add" />
            </form>
          </div>
          <!-- <tasksComponent :tasks="tasks"></tasksComponent> -->
          <div class="card-body bg-light">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th colspan="2" style="text-align: center">Les Tâches</th>
                </tr>
              </thead>
              <tbody v-if="tasks.length > 1">
                <tr v-for="task, index in tasks" :key="task.Description">
                  <td v-if="task">
                    <input id="checkTask" style="margin-right: 10px" type="checkbox" class="form-check-input"
                      @input="$emit('doneTask', task); tasks.splice(index, 1)" />
                    <!--@input="$emit('doneTask', task); tasks.splice(parseInt(index), 1)" />-->
                    <label>{{ task }}</label>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td style="text-align: center;">
                    il n y pas des Taches
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

//import tasksComponent from "./tasksComponent.vue";
import '../Tache/model/Tache.ts';
import TasksComponent from './tasksComponent.vue';

export default {
  data() {
    return {
      taskValue : new Tache(),
      // taskValue:{
      //   type:Object,
      // },
      tasks: [new Tache()],
    }
  },
  // components: {
  //   tasksComponent,
  // },
};
</script>
