<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-md-10 mx-auto">
        <div class="card">
          <div class="card-header">
            <form class="form-inline my-2 my-lg-0 mx-auto">
              <table style="width: 100%;">
                <tr>
                  <td>
                    <label style="float: left; margin-right: 10px;" class="mt-2" for="date">Description:</label>
                    <input required class="form-control mr-sm-2" placeholder="Ajouter une Tâche"
                    style="width: 70%; float: left; margin-right: 8px;" v-model="taskValue.Description" />
                  </td>
                  <td rowspan="3" style="height: 100%; ">
                    <input required class="btn btn-primary my-2 my-sm-0 float-left" type="button"
                    @click="taskValue.Description != '' ?  tasks.push({Description:taskValue.Description, Date:taskValue.Date, Status:false}) : '', taskValue.Description = '', taskValue.Date=new Date()" value="Add" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style="float: left; margin-right: 55px;" class="mt-2" for="date">Date:</label>
                    <input  id="date" type="date" class="form-control mr-sm-2" style="width: 70%; margin-right: 8px" v-model="taskValue.Date"/>
                  </td>
                </tr>
              </table>
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
                  <td v-if="task.Description != ''">
                    <input id="checkTask" style="margin-right: 10px" type="checkbox" class="form-check-input"
                      @input="$emit('doneTask', task); tasks.splice(index, 1), task.Status=true, tasks.splice(index,1)" />
                    <!--@input="$emit('doneTask', task); tasks.splice(parseInt(index), 1)" />-->
                  </td>
                  <td v-if="task.Description != ''">
                    <label>{{ task.Description }}</label>
                  </td>
                  <td v-if="task.Description != ''">
                    <label>{{ task.Date }}</label>
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

class Tache{
    // les attributs
    private _description = '';
    private _date = new Date();
    private _statut = false;
    
    // les getters et setters
    public get Description(): string {
        return this._description;
    }
    public set Description(value:string) {
        this._description = value;
    }
    public get Date() : Date{
        return this._date;
    }
    public set Date(date : Date){
        this._date = date;
    }
    public get Status() : boolean{
        return this._statut;
    }
    public set Status(status : boolean){
        this._statut = status;
    }
}

export default {
  data() {
    return {
      taskValue : new Tache(),
      tasks: [new Tache()],
    }
  },
  // components: {
  //   tasksComponent,
  // },
};
</script>
