<template>
  <div>
    <div class="music-container">
      <div class="music-box" :class="{ hide: !showList }">
        <div class="close" @click="closeClick">
          <HopeIcon icon="close" />
        </div>
        <div id="musicAPlayer"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'aplayer/dist/APlayer.min.css';
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, nextTick } from 'vue';

let APlayer: any;

let musicList = reactive([])
const showList = ref(false)

const InsertMusic = () => {
  const navElm = document.querySelector('.vp-navbar-end')
  if (!navElm) {
    return
  }
  if (!document.querySelector('#music-btn')) {
    const elm = document.createElement('div')
    elm.id = 'music-btn'
    elm.classList.add('nav-item')
    elm.innerHTML = `<div id="music-icon" class="btnImg"/>`
    navElm.appendChild(elm)
  }
  const musicBtn = document.querySelector('#music-btn') as HTMLElement
  musicBtn.onclick = (event) => {
    showList.value = !showList.value
    event.stopPropagation()
  }

  const musicContainer = document.querySelector('.music-container') as HTMLElement
  musicContainer.onclick = (event) => {
    event.stopPropagation()
  }
}

const NewPlayer = () => {
  if (!APlayer) {
    return
  }
  const playElm = document.getElementById('musicAPlayer')
  if (!playElm) {
    return
  }

  if (musicList.length < 1) {
    return
  }

  addBtnSpin()

  const playExist = playElm.classList.contains('aplayer')
  if (playExist) {
    return;
  }
  const win: any = window;
  win.musicAPlayer = new APlayer({
    container: document.getElementById('musicAPlayer'),
    audio: musicList,
    lrcType:3,
  })

  win.musicAPlayer.on('play', function () {
    addBtnSpin()
  })
  win.musicAPlayer.on('pause', function () {
    addBtnSpin()
  })
}

const getMusicList = () => {
  const server = 'netease'
  const type = 'playlist'
  const id=10162182605
  fetch(`https://www.zwymw.top/api/music.json`)
    .then(res => res.json())
    .then((res) => {
      if (res && res.length > 0) {
        musicList = res
        NewPlayer()
      }
    })
}

const addBtnSpin = () => {
  const win: any = window;
  if (win.musicAPlayer && win.musicAPlayer.mode) {
    if (win.musicAPlayer.paused) {
      document.getElementById('music-icon')?.classList.remove('spin')
    } else {
      document.getElementById('music-icon')?.classList.add('spin')
    }
  }
}

const closeClick = () => {
  showList.value = false
}

onMounted(() => {
  const router = useRouter();
  import('aplayer').then((res) => {
    nextTick(() => {
      APlayer = res.default;
      InsertMusic()
      getMusicList()
      window.document.body.onclick = () => {
        showList.value = false
      }
    })
    router.beforeEach(() => {
      setTimeout(() => {
        InsertMusic()
        getMusicList()
      }, 50);
    });
  })


})
</script>

<style lang="scss">
.spin {
  animation: turn 5s linear infinite;
}

@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

.music-container {
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 12;
  cursor: pointer;
  user-select: none;
}

.music-box {
  background-color: #fff;
  user-select: none;
  position: fixed;
  width: 360px;
  top: 50%;
  right: 50%;
  margin-right: -180px;
  margin-top: -217px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  transition: 0.3s;
  transform: scale(1);
  opacity: 1;

  &.hide {
    top: 0;
    right: 0;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

  .aplayer {
    margin: 0;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}

#music-btn {
  top: 1px;
  user-select: none;
  cursor: pointer;
  opacity: 0.7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-color);

  .icon {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }

  height: 1.6rem;
  width: 1.6rem;

  .btnImg {
    transform: rotate(-30deg);
    background-image: url('/assets/img/playBtn.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
