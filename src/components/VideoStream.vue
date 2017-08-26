<template>
	<div class="video">
		<div class="video__wrapper">
			<iframe type="text/html" width="640" height="360" :src="stream" frameborder="0"></iframe>	
		</div>	
	</div>
</template>

<script>
export default {
  name: 'video-stream',
  props: ['stream'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
.video {
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	z-index: 1;
	transition: transform 400ms;
}

.video__wrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	/*padding-top: 25px;*/
	height: 0;
}
.video__wrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

</style>