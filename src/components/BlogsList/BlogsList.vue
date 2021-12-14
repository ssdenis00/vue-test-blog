<template>
  <ul class="blogs">
    <Blog v-for="blog of allBlogs" :key="blog.id" :blog="blog" />
  </ul>
</template>

<script>
import Blog from "../Blog/Blog.vue";
import { mapGetters } from "vuex";

export default {
  name: "BlogsList",
  components: {
    Blog,
  },
  computed: mapGetters(["allBlogs"]),
};
</script>

<style src="./BlogsList.css" scoped></style>
