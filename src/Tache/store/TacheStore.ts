import { createStore } from 'vuex'

// import model of Tache
import Tache from '../model/Tache'


const store = createStore({
    state() {
        return {
            // for testing
            counter: 0,

            // for AddTask Componenet
            taskValue: new Tache(),
            tasks: [] as Tache[],

            // for DoneTask Component
            DoneTasks: [] as Tache[]
        }
    }
})

export default store;