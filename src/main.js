import { createApp } from 'vue';
//import {createStore} from 'vuex';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';


import PostHeader from "./layout/RowAfterHeader.vue";
import NewPage from './pages/NewPage.vue';
import TopPage from './pages/TopPage.vue';
import JobsPage from './pages/JobsPage.vue';
import ShowPage from './pages/ShowPage.vue';
import AskPage from "./pages/AskPage.vue";
import TheArticle from "./components/TheArticle.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/top"
    },
    {
      path: "/top",
      component: TopPage
    },
    {
      path: '/story/:id',
      component: TheArticle
    },
    {
      path: "/new",
      component: NewPage
    },
    {
      path: "/ask",
      component: AskPage
    },
    {
      path: "/show",
      component: ShowPage
    },
    {
      path: "/jobs",
      component: JobsPage
    }
  ]
});
const app = createApp(App);
app.component("post-header", PostHeader);
app.use(router);
app.mount('#app');
