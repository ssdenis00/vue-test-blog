import Vue from "vue";
import Vuex from "vuex";
import blogs from "./blogs/blogs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blogs,
  },
});
