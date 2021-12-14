<template>
  <ul class="comments">
    <Comment
      v-for="comment of selectedCurrentBlog.comments"
      :key="comment.id"
      :comment="comment"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import Comment from "../Comment/Comment.vue";

export default {
  components: {
    Comment,
  },

  computed: mapGetters(["selectedCurrentBlog"]),
};
</script>

<style src="./CommentsList.css"></style>
