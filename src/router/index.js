import Vue from "vue";

import Router from "vue-router";

import FirstPage from "../components/FirstPage.vue";
import Contact from "../components/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: FirstPage
    },
    {
      path: "/Contact",
      component: Contact
    }
  ]
});

document.body.style.backgroundColor = "hsl(240, 100%, 90%)";
