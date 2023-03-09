<template>
  <div>
    <headerComponent/>
    <addTasks @doneTask="ListdoneTasks.push($event)"/>
    <DoneTasks :DoneTasks="ListdoneTasks"/>
  </div>
</template>

<script lang="ts">
import headerComponent from './components/headerComponent.vue';
import addTasks from './components/AddTask.vue';
import DoneTasks from './components/DoneTasks.vue';


export default{
  data(){
    return {
      ListdoneTasks: [''],
    }
  },
  components: {
    headerComponent,
    addTasks,
    DoneTasks,
  },
}

// import { Vue, Options } from "vue-class-component";
// @Options({
//   data(){
//     return {
//       ListdoneTasks: [''],
//     }
//   },
//   components: {
//     headerComponent,
//     addTasks,
//     DoneTasks,
//   },
// })
// export default class indexApp extends Vue {
  
// }
</script>

<style>
AjouterTask {
  margin-top: 50px;
}
</style>
