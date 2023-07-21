import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './pages/Home/Home.vue';
import Restaurant from './pages/Restaurant/Restaurant.vue';

import './style.css'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/restaurants/:id',
        component: Restaurant,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
