<template>
  <form @submit.prevent="submitFormComment" action="/" class="form">
    <input
      v-model="nameInput"
      type="text"
      class="form__input"
      placeholder="Имя"
      maxlength="15"
      minlength="3"
      required
    />
    <textarea
      placeholder="Комментарий"
      v-model="commentTextarea"
      name="comment"
      cols="30"
      rows="10"
      minlength="3"
      maxlength="30"
      class="form__textarea"
      required
    ></textarea>
    <button type="submit" class="form__btn">Написать</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      commentTextarea: "",
      nameInput: "",
    };
  },
  methods: {
    ...mapMutations(["addComment"]),

    submitFormComment() {
      const text = this.commentTextarea.split("\n");
      let validText = [];

      for (let i = 0; i < text.length; ++i) {
        if (text[i] !== "") {
          validText.push(text[i]);
        }
      }

      this.addComment({
        name: this.nameInput,
        text: validText,
        id: Date.now(),
      });

      this.nameInput = "";
      this.commentTextarea = "";
    },
  },
};
</script>

<style src="./FormComment.css" scoped></style>
