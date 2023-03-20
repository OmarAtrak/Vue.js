import { createApp } from 'vue';
// import { createPinia } from 'pinia'

import App from './App.vue';

// for using routers
import router from './router';

// for using bootstrap
import "bootstrap/dist/css/bootstrap.css";

// for using store
import store from './Tache/store/TacheStore';

// for using SimpleTypeahead
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';



const app = createApp(App);

// app.use(createPinia());
app.use(router);
app.use(store);
app.use(SimpleTypeahead);
// app.use(simpleTypeahead);

app.mount('#app');