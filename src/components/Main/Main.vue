<template>
  <section class="section">
    <router-link class="link" :to="{ name: 'formBlog' }"
      >Создать запись</router-link
    >
    <BlogsList />
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import BlogsList from "../BlogsList/BlogsList.vue";

export default {
  components: {
    BlogsList,
  },
  mounted() {
    this.changeUpdateBlogState(false);
  },
  methods: mapMutations(["changeUpdateBlogState"]),
};
</script>

<style src="./Main.css" scoped></style>
