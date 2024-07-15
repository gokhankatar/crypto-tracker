<template>
  <div class="container d-flex justify-center align-center">
    <span class="text text-h5 text-md-h4">{{
      $route.fullPath === "/signup" ? "Register" : "Login"
    }}</span>
    <img
      :src="
        _store.theme === 'light'
          ? 'https://img.freepik.com/free-vector/abstract-wavy-lines-gradient-background_78370-3039.jpg'
          : 'https://i.redd.it/fgz1iub7nm551.jpg'
      "
    />
    <div class="rains">
      <span></span><span></span><span></span><span></span><span></span> <span></span
      ><span></span><span></span><span></span><span></span> <span></span><span></span
      ><span></span><span></span><span></span> <span></span><span></span><span></span
      ><span></span><span></span>
    </div>
    <div class="splat">
      <span></span><span></span><span></span><span></span><span></span> <span></span
      ><span></span><span></span><span></span><span></span> <span></span><span></span
      ><span></span><span></span><span></span> <span></span><span></span><span></span
      ><span></span><span></span> <span></span><span></span><span></span><span></span
      ><span></span>
    </div>
  </div>
</template>

<script setup>
import store from "../store/pinia";

const _store = store();
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}

.text {
  position: absolute;
  text-transform: uppercase !important;
  color: #fff !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}

.container img {
  max-width: 90%;
  filter: brightness(0.5);
}

.rains {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: rotate(20deg);
}

.rains span {
  position: absolute;
  width: 1px;
  height: 180px;
  background: #fff;
  opacity: 0.4;
}

.rains span:nth-child(1) {
  left: 5%;
  top: -190px;
  animation: rain-anim 10s infinite;
}

.rains span:nth-child(2) {
  left: 10%;
  top: -180px;
  animation: rain-anim 11s infinite;
}

.rains span:nth-child(3) {
  left: 15%;
  top: -170px;
  animation: rain-anim 8s infinite;
}

.rains span:nth-child(4) {
  left: 20%;
  top: -160px;
  animation: rain-anim 12s infinite;
}

.rains span:nth-child(5) {
  left: 25%;
  top: -150px;
  animation: rain-anim 10s infinite;
}

.rains span:nth-child(6) {
  left: 30%;
  top: -150px;
  animation: rain-anim 11s infinite;
}

.rains span:nth-child(7) {
  left: 35%;
  top: -160px;
  animation: rain-anim 13s infinite;
}

.rains span:nth-child(8) {
  left: 40%;
  top: -170px;
  animation: rain-anim 7s infinite;
}

.rains span:nth-child(9) {
  left: 45%;
  top: -180px;
  animation: rain-anim 9s infinite;
}

.rains span:nth-child(10) {
  left: 50%;
  top: -190px;
  animation: rain-anim 11s infinite;
}

.rains span:nth-child(11) {
  left: 55%;
  top: -190px;
  animation: rain-anim 10s infinite;
}

.rains span:nth-child(12) {
  left: 60%;
  top: -180px;
  animation: rain-anim 6s infinite;
}

.rains span:nth-child(13) {
  left: 65%;
  top: -170px;
  animation: rain-anim 14s infinite;
}

.rains span:nth-child(14) {
  left: 70%;
  top: -160px;
  animation: rain-anim 12s infinite;
}

.rains span:nth-child(15) {
  left: 75%;
  top: -150px;
  animation: rain-anim 10s infinite;
}

.rains span:nth-child(16) {
  left: 80%;
  top: -150px;
  animation: rain-anim 14s infinite;
}

.rains span:nth-child(17) {
  left: 85%;
  top: -160px;
  animation: rain-anim 8s infinite;
}

.rains span:nth-child(18) {
  left: 90%;
  top: -170px;
  animation: rain-anim 9s infinite;
}

.rains span:nth-child(19) {
  left: 95%;
  top: -180px;
  animation: rain-anim 11s infinite;
}

.rains span:nth-child(20) {
  left: 100%;
  top: -190px;
  animation: rain-anim9 13s infinite;
}

/*アニメーションキーフレーム*/
@keyframes rain-anim {
  0% {
    transform: translate(0px, 0px);
  }

  4% {
    transform: translate(0px, 600px);
  }

  5% {
    transform: translate(200px, 0px);
  }

  9% {
    transform: translate(200px, 600px);
  }

  10% {
    transform: translate(-100px, 0px);
  }

  14% {
    transform: translate(-100px, 600px);
  }

  15% {
    transform: translate(-200px, 0px);
  }

  19% {
    transform: translate(-200px, 600px);
  }

  20% {
    transform: translate(100px, 0px);
  }

  24% {
    transform: translate(100px, 600px);
  }

  25% {
    transform: translate(-150px, 0px);
  }

  29% {
    transform: translate(-150px, 600px);
  }

  30% {
    transform: translate(-80px, 0px);
  }

  34% {
    transform: translate(-80px, 600px);
  }

  35% {
    transform: translate(150px, 0px);
  }

  39% {
    transform: translate(150px, 600px);
  }

  40% {
    transform: translate(-60px, 0px);
  }

  44% {
    transform: translate(-60px, 600px);
  }

  45% {
    transform: translate(90px, 0px);
  }

  49% {
    transform: translate(90px, 600px);
  }

  50% {
    transform: translate(60px, 0px);
  }

  54% {
    transform: translate(60px, 600px);
  }

  55% {
    transform: translate(-60px, 0px);
  }

  59% {
    transform: translate(-60px, 600px);
  }

  60% {
    transform: translate(-40px, 0px);
  }

  64% {
    transform: translate(-40px, 600px);
  }

  65% {
    transform: translate(40px, 0px);
  }

  69% {
    transform: translate(40px, 600px);
  }

  70% {
    transform: translate(-20px, 0px);
  }

  74% {
    transform: translate(-20px, 600px);
  }

  75% {
    transform: translate(-110px, 0px);
  }

  79% {
    transform: translate(-110px, 600px);
  }

  80% {
    transform: translate(20px, 0px);
  }

  84% {
    transform: translate(20px, 600px);
  }

  85% {
    transform: translate(-20px, 0px);
  }

  89% {
    transform: translate(-20px, 600px);
  }

  90% {
    transform: translate(50px, 0px);
  }

  99% {
    transform: translate(50px, 600px);
  }
}

/*splat*/
.splat {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.splat span {
  position: absolute;
  width: 100px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
}

.splat span:nth-child(1) {
  left: 0%;
  top: 30%;
  animation: splat-anim 5.5s infinite;
}

.splat span:nth-child(2) {
  left: 10%;
  top: 90%;
  animation: splat-anim 7.2s infinite;
}

.splat span:nth-child(3) {
  left: 15%;
  top: 15%;
  animation: splat-anim 4.3s infinite;
}

.splat span:nth-child(4) {
  left: 20%;
  top: 20%;
  animation: splat-anim 5.7s infinite;
}

.splat span:nth-child(5) {
  left: 25%;
  top: 80%;
  animation: splat-anim 6.3s infinite;
}

.splat span:nth-child(6) {
  left: 30%;
  top: 35%;
  animation: splat-anim 8.5s infinite;
}

.splat span:nth-child(7) {
  left: 35%;
  top: 70%;
  animation: splat-anim 7.7s infinite;
}

.splat span:nth-child(8) {
  left: 40%;
  top: 10%;
  animation: splat-anim 4.8s infinite;
}

.splat span:nth-child(9) {
  left: 45%;
  top: 65%;
  animation: splat-anim 5.3s infinite;
}

.splat span:nth-child(10) {
  left: 50%;
  top: 55%;
  animation: splat-anim 3.5s infinite;
}

.splat span:nth-child(11) {
  left: 55%;
  top: 30%;
  animation: splat-anim 5.1s infinite;
}

.splat span:nth-child(12) {
  left: 60%;
  top: 75%;
  animation: splat-anim 7.1s infinite;
}

.splat span:nth-child(13) {
  left: 65%;
  top: 15%;
  animation: splat-anim 4.2s infinite;
}

.splat span:nth-child(14) {
  left: 70%;
  top: 60%;
  animation: splat-anim 5s infinite;
}

.splat span:nth-child(15) {
  left: 75%;
  top: 50%;
  animation: splat-anim 3s infinite;
}

.splat span:nth-child(16) {
  left: 80%;
  top: 10%;
  animation: splat-anim 6.4s infinite;
}

.splat span:nth-child(17) {
  left: 85%;
  top: 45%;
  animation: splat-anim 5.9s infinite;
}

.splat span:nth-child(18) {
  left: 90%;
  top: 55%;
  animation: splat-anim 7s infinite;
}

.splat span:nth-child(19) {
  left: 95%;
  top: 25%;
  animation: splat-anim 4s infinite;
}

.splat span:nth-child(20) {
  left: 100%;
  top: 85%;
  animation: splat-anim 8.2s infinite;
}

@keyframes splat-anim {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  10% {
    opacity: 0;
    transform: scale(0);
  }

  14% {
    opacity: 0.3;
    transform: scale(0.4);
  }

  15% {
    opacity: 0;
    transform: scale(0);
  }

  30% {
    opacity: 0;
    transform: scale(0);
  }

  34% {
    opacity: 0.2;
    transform: scale(0.8);
  }

  35% {
    opacity: 0;
    transform: scale(0);
  }

  40% {
    opacity: 0;
    transform: scale(0);
  }

  44% {
    opacity: 0.2;
    transform: scale(0.2);
  }

  45% {
    opacity: 0;
    transform: scale(0);
  }

  50% {
    opacity: 0;
    transform: scale(0);
  }

  54% {
    opacity: 0.2;
    transform: scale(0.5);
  }

  55% {
    opacity: 0;
    transform: scale(0);
  }

  64% {
    opacity: 0;
    transform: scale(0);
  }

  70% {
    opacity: 0.1;
    transform: scale(1);
  }

  71% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
