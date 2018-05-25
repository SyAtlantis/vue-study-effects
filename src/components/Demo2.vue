<template>
  <div class="demo2">
    <div class="loader">
      <span>
      </span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo2 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .loader {
    width: 150px;
    height: 150px;
    position: relative;

    span {
      position: absolute;
      box-sizing: border-box;
      border: 10px solid dimgray;
      border-radius: 2px;
      animation: rotating linear infinite;

      &:nth-child(1) {
        width: 100%;
        height: 100%;
        animation-duration: 4s;
        z-index: 3;
      }
      &:nth-child(2) {
        width: 70%;
        height: 70%;
        margin: 15%;
        animation-duration: 2s;
        z-index: 2;
      }
      &:nth-child(3) {
        width: 40%;
        height: 40%;
        margin: 30%;
        animation-duration: 1s;
        z-index: 1;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 50%;
        background-color: gold;
      }
      &::before {
        top: -10px;
        left: -10px;
      }
      &::after {
        bottom: -10px;
        right: -10px;
      }
    }
  }
}

@keyframes rotating {
  form {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
