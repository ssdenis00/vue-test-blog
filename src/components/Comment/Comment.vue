<template>
  <li class="comments__item">
    <div class="comments__content">
      <h2 class="comments__name">{{ comment.name }}</h2>
      <p v-for="(text, i) of comment.text" :key="i" class="comments__text">
        {{ text }}
      </p>
    </div>
    <button type="button" class="comments__btn" @click="handleClickDeleteBtn">
      удалить
    </button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["comment"],
  methods: {
    ...mapMutations(["deleteComment"]),
    handleClickDeleteBtn() {
      this.deleteComment(this.comment);
    },
  },
};
</script>
