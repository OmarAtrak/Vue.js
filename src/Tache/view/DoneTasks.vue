<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-md-10 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <div style="text-align: center;">
                            <b>Les Tâches Réaliser</b>
                        </div>
                    </div>
                    <div class="card-body bg-light">
                        <table v-if="store.state.DoneTasks.length > 0" class="table table-hover">
                            <tbody>
                                <tr v-for="task,index in store.state.DoneTasks" :key="task.Description">
                                    <td v-if="task.Description">
                                        <input checked="true" disabled style="margin-right: 10px" type="checkbox"/>
                                        {{ task.Description }}
                                    </td>
                                    <td v-if="task.Description">
                                        {{ task.Date }}
                                    </td>
                                    <td v-if="task.Description">
                                        <input class="btn btn-danger my-2 my-sm-0" style="float: right;" type="button"
                                        value="Delete" @click="store.state.DoneTasks.splice(index,1)"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p v-else style="text-align: center;">il n y pas des Taches Réalisées</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

// for using store
import store from '../store/TacheStore'


export default {
    data(){
        return{
            store,
        }
    },
    
    // props: ['DoneTasks'],
}
</script>