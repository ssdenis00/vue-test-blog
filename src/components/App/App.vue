<template>
  <main id="app">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
