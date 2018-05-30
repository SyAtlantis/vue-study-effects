<template>
  <div class="demo6">
    <div class="diamond">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo6",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo6 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: navy;

  --color1: deepskyblue;
  --color2: steelblue;
  --color3: royalblue;
  --color4: dodgerblue;

  .diamond {
    display: grid;
    grid-template-columns: 1fr 1fr;
    transform: rotate(45deg);

    span {
      border-width: 50px;
      border-style: solid;

      border-color: var(--color1) var(--color2) var(--color3) var(--color4);

      &:first-child {
        border-color: transparent var(--color2) var(--color3) transparent;
      }

      &:not(:first-child) {
        animation: animate 2s linear infinite;
      }
    }
  }
}

@keyframes animate {
  0% {
    border-color: var(--color1) var(--color2) var(--color3) var(--color4);
  }
  25% {
    border-color: var(--color4) var(--color1) var(--color2) var(--color3);
  }
  50% {
    border-color: var(--color3) var(--color4) var(--color1) var(--color2);
  }
  75% {
    border-color: var(--color2) var(--color3) var(--color4) var(--color1);
  }
  100% {
    border-color: var(--color1) var(--color2) var(--color3) var(--color4);
  }
}
</style>
