<template>
  <div class="demo25">
    <div class="loader">
      <div class="face">
        <div class="circle"></div>
      </div>
      <div class="face">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo25",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo25 {
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
    width: 200px;
    height: 200px;
    position: relative;

    .face {
      position: absolute;
      border: 2px solid transparent;
      border-radius: 50%;

      --color: gold;
      border-top-color: var(--color);
      border-left-color: var(--color);
      animation: animate 3s linear infinite;

      &:nth-child(1) {
        width: 100%;
        height: 100%;
        --color: gold;
        --deg: 0deg;
      }
      &:nth-child(2) {
        width: 70%;
        height: 70%;
        --color: lime;
        --deg: 180deg;
        animation-direction: reverse;
      }

      .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 1px;
        background-color: transparent;
        transform-origin: left;
        transform: rotate(calc(var(--deg) - 45deg));

        &::before {
          position: absolute;
          top: -5px;
          right: -5px;
          content: "";
          background-color: var(--color);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          box-shadow: 0 0 20px var(--color), 0 0 40px var(--color),
            0 0 60px var(--color), 0 0 80px var(--color), 0 0 100px var(--color),
            0 0 5px rgba(255, 255, 0, 0.1);
        }
      }
    }
  }
}
@keyframes animate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
