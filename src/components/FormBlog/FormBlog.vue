<template>
  <form @submit.prevent="submitFormBlog" action="/" class="form">
    <router-link class="form__link" :to="{ name: 'main' }">Главная</router-link>
    <input
      placeholder="Введите Имя статьи"
      type="text"
      class="form__input"
      v-model="inputTitle"
      maxlength="15"
      required
    />
    <input
      placeholder="Введите Краткое описание статьи"
      type="text"
      maxlength="30"
      class="form__input"
      v-model="inputDescription"
      required
    />
    <textarea
      name="blog"
      class="form__textarea"
      cols="30"
      rows="10"
      v-model="textareaResult"
      placeholder="Введите статью"
      required
    ></textarea>
    <button type="submit" class="form__btn">Сохранить</button>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      inputTitle: "",
      textareaResult: "",
      inputDescription: "",
    };
  },
  mounted() {
    this.inputTitle = this.checkUpdateState
      ? this.selectedCurrentBlog.title
      : "";
    this.textareaResult = this.checkUpdateState
      ? this.selectedCurrentBlog.content
      : "";
    this.inputDescription = this.checkUpdateState
      ? this.selectedCurrentBlog.description
      : "";
  },
  computed: mapGetters(["checkUpdateState", "selectedCurrentBlog"]),
  methods: {
    ...mapMutations(["addBlog", "updateBlog"]),

    submitFormBlog() {
      if (this.checkUpdateState) {
        this.updateBlog({
          id: this.selectedCurrentBlog.id,
          title: this.inputTitle,
          content: this.textareaResult,
          description: this.inputDescription,
        });
      } else {
        const content = this.textareaResult.split("\n");

        this.addBlog({
          title: this.inputTitle,
          content,
          description: this.inputDescription,
          comments: [],
          id: Date.now(),
        });
      }

      this.inputTitle = "";
      this.textareaResult = "";
      this.inputDescription = "";

      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style src="./FormBlog.css" scoped></style>
