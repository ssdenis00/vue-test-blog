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
    let { content, title, description } = this.selectedCurrentBlog;

    content = content.map((item, i) => (i !== 0 ? "\n" + item : item)).join("");

    this.inputTitle = this.checkUpdateState ? title : "";
    this.textareaResult = this.checkUpdateState ? content : "";
    this.inputDescription = this.checkUpdateState ? description : "";
  },
  computed: mapGetters(["checkUpdateState", "selectedCurrentBlog"]),
  methods: {
    ...mapMutations(["addBlog", "updateBlog"]),

    submitFormBlog() {
      let content = this.textareaResult.split("\n");
      let validContent = [];

      for (let i = 0; i < content.length; ++i) {
        if (content[i] !== "") {
          validContent.push(content[i]);
        }
      }

      if (this.checkUpdateState) {
        this.updateBlog({
          id: this.selectedCurrentBlog.id,
          title: this.inputTitle,
          content: validContent,
          description: this.inputDescription,
        });
      } else {
        this.addBlog({
          title: this.inputTitle,
          content: validContent,
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
