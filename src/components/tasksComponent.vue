<template>
  <div class="card-body bg-light">
    <table class="table table-hover">
      <thead>
        <tr>
          <th colspan="2" style="text-align: center">Les Tâches</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task">
          <td v-if="task">
            <input id="checkTask" 
            style="margin-right: 10px" type="checkbox" 
            class="form-check-input" @change="$emit('done-task',task);"/>
            <label>{{ task }}</label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  
export default{
    props: ['tasks'],
}
</script>
