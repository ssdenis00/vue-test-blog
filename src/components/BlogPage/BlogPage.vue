<template>
  <section class="blog-page">
    <router-link class="blog-page__link" :to="{ name: 'main' }"
      >На главную</router-link
    >

    <h1 class="blog-page__title">
      {{ selectedCurrentBlog.title }}
    </h1>
    <p class="blog-page__description">
      {{ selectedCurrentBlog.description }}
    </p>
    <p
      v-for="(paragraph, i) of selectedCurrentBlog.content"
      :key="i"
      class="blog-page__content"
    >
      {{ paragraph }}
    </p>
    <div class="blog-page__comments">
      <CommentList />
      <FormComment />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import FormComment from "../FormComment/FormComment.vue";
import CommentList from "../CommentsList/CommentsList.vue";

export default {
  components: {
    FormComment,
    CommentList,
  },

  computed: mapGetters(["selectedCurrentBlog"]),
};
</script>

<style src="./BlogPage.css" scoped></style>
