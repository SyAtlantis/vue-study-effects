<template>
    <div class="demo1">
        <span data-text="B">B</span>
        <span data-text="U">U</span>
        <span data-text="T">T</span>
        <span data-text="T">T</span>
        <span data-text="O">O</span>
        <span data-text="N">N</span>
    </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo1 {
  width: 200px;
  height: 60px;
  border: 2px solid black;
  text-align: center;
  font-size: 30px;
  line-height: 60px;
  font-family: sans-serif;
  overflow: hidden;

  span {
    display: inline-block;
    color: blue;
    transition: 0.5s;

    &:nth-child(odd) {
      transform: translateY(-100%);
    }
  }
  //   span:nth-child(odd) {
  //     transform: translateY(-100%);
  //   }
  span:nth-child(even) {
    transform: translateY(100%);
  }

  span::before {
    content: attr(data-text);
    position: absolute;
    color: red;
  }
  span:nth-child(odd)::before {
    transform: translateY(100%);
  }
  span:nth-child(even)::before {
    transform: translateY(-100%);
  }
}
.demo1:hover {
  span {
    transform: translateY(0);
  }
}
</style>
