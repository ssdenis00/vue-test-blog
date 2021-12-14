<template>
  <li class="blogs__item" @click="handleClickBlog">
    <router-link class="blogs__content-link" :to="{ name: 'blog' }">
      <h2 @click="handleClickBlog" class="blogs__title">{{ blog.title }}</h2>
      <p @click="handleClickBlog" class="blogs__description">
        {{ blog.description }}
      </p>
    </router-link>

    <div class="blogs__buttons">
      <button type="button" class="blogs__btn" @click="handleClickUpdateBtn">
        ред.
      </button>
      <button type="button" class="blogs__btn" @click="handleClickDeleteBtn">
        удалить
      </button>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["blog"],
  computed: mapGetters(["checkUpdateState", "selectedCurrentBlog"]),
  methods: {
    ...mapMutations(["deleteBlog", "selectBlog", "changeUpdateBlogState"]),
    handleClickDeleteBtn() {
      this.deleteBlog(this.blog);
    },

    handleClickBlog() {
      this.selectBlog(this.blog);
    },

    handleClickUpdateBtn() {
      this.handleClickBlog();
      this.changeUpdateBlogState(true);
      this.$router.push({ name: "formBlog" });
    },
  },
};
</script>

<style src="./Blog.css" scoped></style>
