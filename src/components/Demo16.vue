<template>
  <div class="demo16">
    <div class="box">
      You are my<br> FAVORITE
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo16",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo16 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: #222;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 2.5em;
    width: 10em;
    height: 5em;
    background: #111;
    font-family: sans-serif;
    line-height: 1.5em;
    text-align: center;
    border-radius: 0.2em;

    position: relative;
    animation: animate_text 2s linear infinite alternate;

    &::after {
      content: "";
      position: absolute;
      width: 110%;
      height: 120%;
      background-color: orange;
      z-index: -1;
      border-radius: 0.2em;

      background-image: linear-gradient(
        60deg,
        aquamarine,
        cornflowerblue,
        goldenrod,
        hotpink,
        salmon,
        lightgreen,
        sandybrown,
        violet
      );
      background-size: 300%, 300%;
      animation: animate_bg 5s ease infinite alternate;
    }
  }
}
@keyframes animate_bg {
  0% {
    background-position: 0%, 5%;
  }
  50% {
    background-position: 100%, 50%;
  }
  100% {
    background-position: 0%, 50%;
  }
}
@keyframes animate_text {
  from {
    color: lime;
  }
  to {
    color: yellow;
  }
}
</style>
