# Video Wall

A quick experiment in creating a media wall, a web page to load on a TV that displays a grid of video streams. My TV* is plugged directly into my PC, so when working on something on my second monitor, I want to have a variety of content streaming on the TV. All streams will be mute by default, and controls will make it easy to toggle sound and focus on individual streams.

_I have a media addiction and fast internet._

![It's a bunch of videos](https://github.com/danlaush/video-wall/raw/master/docs/screenshot.jpg)

Currently I'm making this into a Vue app as a way to learn Vue. To be honest I don't think this will go too much further. Too many problems loading iframes and sourcing reliable news live streams online. Aljazeera & the Australian ABC are the only ones available free online that I've found.

*I don't actually have a TV at the moment

# Usage

- Install [Ignore X-Frame Headers](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe) to load the ABC

``` bash
# clone the repo 
git clone https://github.com/danlaush/video-wall.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Current state

- ~~It's a web page with some `<iframe>`s~~
- ~~Artisan, hand-crafted `<iframe>`s~~
- Basic Vue app, open the menu with `Alt + S` to add new streams

## Ideas

- Generate streams from a list of URLs
- Automate tiling based on number of streams (if <4, tile 2x2 not 3x3)
- Manage list of streams in an interface
- Suggest streams
    - Not all streams are live 24 hours

## Struggles

- When videos are tiled 2x2, 16:9 videos don't fit in their container
    - Currently, videos made responsive with padding hack
- X-Frame-Headers
    - Solution: Chrome extension to [Ignore X-Frame Headers](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe). This allowed me to put [the ABC](http://iview.abc.net.au/programs/abc-news-24/NS1413V001S00) in an `<iframe>`.
- Manipulate sites loaded in `<iframe>`s
    - The ABC doesn't have an embed option like Youtube, so the `<iframe>` loads a landing page. Need a way to click the play button in the iframe. For security reasons you can't run javascript in the container, maybe solution