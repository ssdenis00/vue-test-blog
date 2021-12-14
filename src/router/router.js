import Vue from "vue";
import Router from "vue-router";

import Main from "../components/Main/Main.vue";
import BlogPage from "../components/BlogPage/BlogPage.vue";
import FormBlog from "../components/FormBlog/FormBlog.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", name: "main", component: Main },
    { path: "/blog", name: "blog", component: BlogPage },
    { path: "/form-blog", name: "formBlog", component: FormBlog },
  ],
});

export default router;
