<template>
  <div id="settings">
    <h2>The Menu</h2>
    <ul>
      <li v-for="(stream, index) in streams"
      :key="index">
        <input type="text" :value="stream" />
        <button v-on:click="removeVideoStream(stream)">X</button>
      </li>
  </ul>
  <form v-on:submit="addVideoStream">
    <input />
    <button type="submit">Add Stream</button>
  </form>
  <p>Press <em>Alt + S</em> to toggle the Settings sidebar open and closed</p>
</div>
</template>

<script>
  export default {
    name: 'settings',
    props: ['streams'],
    methods: {
      addVideoStream(e) {
        e.preventDefault();
        this.$emit('addVideoStream', e.target[0].value);
        e.target.reset();
      },
      removeVideoStream(stream) {
        this.$emit('removeVideoStream', stream);
      },
    },
  };
</script>

<style scoped>
input {
  width: 80%;
}
</style>