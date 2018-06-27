<template>
  <div class="demo11">
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "Demo11",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo11 {
  height: 600px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  --innerRadius: 2em;

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(var(--innerRadius) * 2);
    height: calc(var(--innerRadius) * 2);
    background-color: lime;
    border-radius: 50%;

    box-shadow: 0 0 0 calc(var(--innerRadius) - 0.4em) black,
      0 0 0 var(--innerRadius) lime;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: calc(var(--innerRadius) * 2 * 2);
      height: calc(var(--innerRadius) * 2 * 2);
      border: 2px solid lime;
      border-radius: 50%;

      animation: pulse 2s ease-out infinite;
    }
    &::after {
      animation-delay: 1s;
    }
  }
}
@keyframes pulse {
  from {
    transform: scale(1);
    filter: opacity(0.9);
  }
  to {
    transform: scale(2);
    filter: opacity(0);
  }
}
</style>
