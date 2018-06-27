<template>
  <div class="demo17">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo17",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo17 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 10em;
    font-size: 28px;
    position: relative;

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(100%, 0%, 0%, 0.3);
      box-sizing: border-box;
      border: 0.5em solid;
      border-color: white rgba(100%, 100%, 100%, 0.2);

      animation: animate 5s ease-in-out infinite alternate;
      width: calc(20% + 20% * (5 - var(--n)));
      height: calc(20% + 20% * (5 - var(--n)));
      animation-delay: calc(0.2s * (5 - var(--n)));

      &:nth-child(1) {
        --n: 1;
      }
      &:nth-child(2) {
        --n: 2;
      }
      &:nth-child(3) {
        --n: 3;
      }
      &:nth-child(4) {
        --n: 4;
      }
      &:nth-child(5) {
        --n: 5;
      }
    }
  }
}
@keyframes animate {
  0% {
    background-color: rgba(100%, 0, 0, 0.3);
    transform: rotate(0deg);
  }
  25% {
    background-color: rgba(100%, 100%, 0, 0.3);
  }
  50% {
    background-color: rgba(0, 100%, 0, 0.3);
  }
  75% {
    background-color: rgba(0, 0, 100%, 0.3);
  }
  100% {
    background-color: rgba(100%, 0, 100%, 0.3);
    transform: rotate(720deg);
  }
}
</style>
