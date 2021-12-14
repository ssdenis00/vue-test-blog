export default {
  actions: {},
  mutations: {
    addBlog(state, newBlog) {
      state.blogs.unshift(newBlog);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    deleteBlog(state, deletedBlog) {
      state.blogs = state.blogs.filter((blog) => blog.id !== deletedBlog.id);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    selectBlog(state, selectedBlog) {
      state.currentBlog = state.blogs.find(
        (blog) => blog.id === selectedBlog.id
      );

      if (state.currentBlog !== undefined) {
        localStorage.setItem("currentBlog", JSON.stringify(state.currentBlog));
      } else {
        localStorage.setItem("currentBlog", JSON.stringify({}));
      }
    },

    addComment(state, comment) {
      state.blogs = state.blogs.map((blog) => {
        if (blog.id === state.currentBlog.id) {
          blog.comments.push(comment);
          return blog;
        }
        return blog;
      });

      state.currentBlog = state.blogs.find(
        (blog) => blog.id === state.currentBlog.id
      );

      localStorage.setItem("currentBlog", JSON.stringify(state.currentBlog));

      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    deleteComment(state, deletedComment) {
      state.blogs = state.blogs.map((blog) => {
        if (blog.id === state.currentBlog.id) {
          blog.comments = blog.comments.filter(
            (comment) => comment.id !== deletedComment.id
          );

          return blog;
        }
        return blog;
      });

      state.currentBlog = state.blogs.find(
        (blog) => blog.id === state.currentBlog.id
      );

      localStorage.setItem("currentBlog", JSON.stringify(state.currentBlog));

      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    changeUpdateBlogState(state, updatedState) {
      state.updateFormState = updatedState;
    },

    updateBlog(state, updatedBlog) {
      state.blogs = state.blogs.map((blog) => {
        if (blog.id === updatedBlog.id) {
          blog.title = updatedBlog.title;
          blog.content = updatedBlog.content;
          blog.description = updatedBlog.description;

          return blog;
        }

        return blog;
      });
    },
  },
  state: {
    blogs: JSON.parse(localStorage.getItem("blogs")) || [],
    currentBlog: JSON.parse(localStorage.getItem("currentBlog")) || {},
    updateFormState: false,
  },
  getters: {
    allBlogs(state) {
      return state.blogs;
    },

    selectedCurrentBlog(state) {
      return state.currentBlog;
    },

    checkUpdateState(state) {
      return state.updateFormState;
    },
  },
};
