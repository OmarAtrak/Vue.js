<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-md-10 mx-auto">
        <div class="card">
          <div class="card-header">
            <form class="form-inline my-2 my-lg-0 mx-auto">
              <table style="width: 100%">
                <tr>
                  <td>
                    <label
                      style="float: left; margin-right: 10px"
                      class="mt-2"
                      for="date"
                      >Description:</label
                    >
                    <input
                      class="form-control mr-sm-2"
                      placeholder="Description de Tâche"
                      style="width: 70%; float: left; margin-right: 8px"
                      v-model="store.state.taskValue.Description"
                    />
                  </td>
                  <td rowspan="3" style="height: 100%">
                    <input
                      class="btn btn-primary my-2 my-sm-0 float-left"
                      type="button"
                      @click="
                        store.state.taskValue.Description != ''
                          ? store.state.tasks.push({
                              Description: store.state.taskValue.Description,
                              Date: store.state.taskValue.Date,
                              Status: false,
                            })
                          : '',
                          (store.state.taskValue.Description = ''),
                          (store.state.taskValue.Date = new Date()),
                          (store.state.taskValue.Status = false)
                      "
                      value="Add"
                    />
                    <!-- <input
                      class="btn btn-primary my-2 my-sm-0 float-left"
                      type="button"
                      @click="
                        store.state.taskValue.Description != ''
                          ? TacheService.ajouter(store.state.taskValue)
                          : '',
                          (store.state.taskValue.Description = ''),
                          (store.state.taskValue.Date = new Date()),
                          (store.state.taskValue.Status = false)
                      "
                      value="Add"
                    />-->
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      style="float: left; margin-right: 55px"
                      class="mt-2"
                      for="date"
                      >Date:</label
                    >
                    <input
                      id="date"
                      type="date"
                      class="form-control mr-sm-2"
                      style="width: 70%; margin-right: 8px"
                      v-model="store.state.taskValue.Date"
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div class="card-body bg-light">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th colspan="3" style="text-align: center">Les Tâches</th>
                </tr>
              </thead>
              <tbody v-if="store.state.tasks.length > 0">
                <tr v-for="(task, index) in store.state.tasks" :key="task.Description">
                  <td v-if="task.Description != ''">
                    <input
                      id="checkTask"
                      style="margin-right: 10px"
                      type="checkbox"
                      class="form-check-input"
                      @input="
                        // $emit('doneTask', task);
                          (task.Status = true),
                          store.state.tasks.splice(index, 1),
                          store.state.DoneTasks.push({
                              Description: task.Description,
                              Date: task.Date,
                              Status: true,
                            });
                      "
                    />
                    <label>{{ task.Description }}</label>
                  </td>
                  <td v-if="task.Description != ''">
                    <label>{{ task.Date }}</label>
                  </td>
                  <td v-if="task.Description">
                    <input
                      class="btn btn-danger my-2 my-sm-0"
                      style="float: right"
                      type="button"
                      value="Delete"
                      @click="store.state.tasks.splice(index, 1)"
                    />
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td style="text-align: center">il n y pas des Taches</td>
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

// for using model of Tache
import Tache from '../model/Tache'

// for using store
import store from '../store/TacheStore'

// for using Service
import TacheService from '../service/TacheService';


export default {
  data() {
    return {
      // taskValue: new Tache(),
      // tasks: [new Tache()],
      store,
      TacheService,
    };
  },
};
</script>
