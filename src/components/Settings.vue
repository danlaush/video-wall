<template>
  <div id="settings">
    <h2>The Menu</h2>
    <ul>
      <li v-for="(stream, index) in streams"
      :key="index">
      <input type="text" :value="stream" />
    </li>
  </ul>
  <form v-on:submit="addVideoStream">
    <input id="newStream" />
    <button id="add" type="submit">Add Stream</button>
  </form>
</div>
</template>

<script>
  export default {
    name: 'settings',
    props: ['streams'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    methods: {
      addVideoStream(e) {
        e.preventDefault();
        this.$emit('addVideoStream', e.target[0].value);
        e.target.reset();
      },
    },
  };
</script>

<style scoped>
input {
  width: 80%;
}
</style>