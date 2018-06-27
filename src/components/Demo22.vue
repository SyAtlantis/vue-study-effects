<template>
  <div class="demo22">
    <p class="rainbow">
      Sy
      <span data-text="Sy"></span>
      <span data-text="Sy"></span>
      <span data-text="Sy"></span>
      <span data-text="Sy"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Demo22",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo22 {
  width: 800px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  .rainbow {
    color: transparent;
    font-size: 300px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.1em;
    position: relative;

    span {
      &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;

        animation: animate 0.8s infinite alternate;
        filter: opacity(0);
        z-index: var(--n);
        height: calc(100% - 10% * var(--n));
        animation-delay: calc(0.8s - 0.1s * var(--n));
      }

      &:nth-child(1) {
        &::before {
          color: orchid;
          --n: 1;
          // z-index: 1;
          // height: calc(100% - 10% * 1);
          // animation-delay: calc(0.8s - 0.1s * 1);
        }
        &::after {
          color: mediumpurple;
          --n: 2;
          // z-index: 2;
          // height: calc(100% - 10% * 2);
          // animation-delay: calc(0.8s - 0.1s * 2);
        }
      }
      &:nth-child(2) {
        &::before {
          color: deepskyblue;
          --n: 3;
          // z-index: 3;
          // height: calc(100% - 10% * 3);
          // animation-delay: calc(0.8s - 0.1s * 3);
        }
        &::after {
          color: cyan;
          --n: 4;
          // z-index: 4;
          // height: calc(100% - 10% * 4);
          // animation-delay: calc(0.8s - 0.1s * 4);
        }
      }
      &:nth-child(3) {
        &::before {
          color: mediumspringgreen;
          --n: 5;
          // z-index: 5;
          // height: calc(100% - 10% * 5);
          // animation-delay: calc(0.8s - 0.1s * 5);
        }
        &::after {
          color: yellow;
          --n: 6;
          // z-index: 6;
          // height: calc(100% - 10% * 6);
          // animation-delay: calc(0.8s - 0.1s * 6);
        }
      }
      &:nth-child(4) {
        &::before {
          color: gold;
          --n: 7;
          // z-index: 7;
          // height: calc(100% - 10% * 7);
          // animation-delay: calc(0.8s - 0.1s * 7);
        }
        &::after {
          color: tomato;
          --n: 8;
          // z-index: 8;
          // height: calc(100% - 10% * 8);
          // animation-delay: calc(0.8s - 0.1s * 8);
        }
      }
    }
  }
}
@keyframes animate {
  from {
    filter: opacity(0);
  }
  to {
    filter: opacity(1);
  }
}
</style>
