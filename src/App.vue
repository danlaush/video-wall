<template>
  <div id="app" :class="{ 'settings-open' : settingsOpen }">
    <settings 
      class="settings" 
      :streams="streams"
      @addVideoStream="addVideoStream"></settings>
    <div class="videos">
      <video-stream
        v-for="(stream, index) in streams"
        :stream="stream"
        :key="index" />
    </div>
  </div>
</template>

<script>
import VideoStream from './components/VideoStream';
import Settings from './components/Settings';

export default {
  name: 'app',
  components: {
    VideoStream,
    Settings,
  },
  data() {
    return {
      settingsOpen: false,
      streams: [
        'https://www.youtube.com/embed/WAt9ZT2CQWg?autoplay=1',
        'https://www.youtube.com/embed/35opuaCwVRI?autoplay=1',
        'https://player.twitch.tv/?channel=kaffeekind&muted=true',
        'https://iview.abc.net.au/programs/abc-live-stream/',
        'https://iview.abc.net.au/programs/abc-news-24/NS1413V001S00',
      ],
    };
  },
  created() {
    window.addEventListener('keyup', this.toggleSettings.bind(this));
  },
  methods: {
    addVideoStream(url) {
      const urlObj = new URL(url);
      let newUrl = url;
      if (urlObj.hostname.indexOf('youtube.com') !== -1) {
        const videoId = urlObj.searchParams.get('v');
        newUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }
      this.streams.push(newUrl);
    },
    toggleSettings(e) {
      if (e.altKey && e.keyCode === 83) { // Alt + S
        this.settingsOpen = !this.settingsOpen;
      }
    },
  },
};
</script>

<style lang="scss">
$black: #111111;
body {
  margin: 0;
  padding: 0;
  background-color: $black;
  color: papayawhip;
  font-family: sans-serif;
  font-weight: bold;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  height: 100vh;

  &.settings-open {
    grid-template-columns: 20% 80%;
  }
}

.settings {
  display: none;
  #app.settings-open & {
    display: block;
  }
}

.videos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 33.33%);
  background: $black;
}
</style>
